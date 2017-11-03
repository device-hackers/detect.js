/**
 * TODO:
 * 1) Add engine and its version detection
 * 2) Improve device id cut-off (it doesn't work for Lenovo TAB 2 A7-30HC)
 * 3) Think on extra mapping for https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions
 * 4) Object.assign doesn't add new items to map? See detect-extension-phablets
 */
Detect.registerExtension((function() {
    var logicVersion = "1.0";
    var userAgentInfo;

    var helper = (function() {
        function getUnidentifiedItem(uaMarks, aItemID) {
            var _itemID = aItemID ? aItemID : Detect.Consts.unidentified;
            return  {
                itemID: _itemID,
                item: uaMarks[Detect.Consts.unidentified],
                itemVersion: Detect.Consts.unidentified
            };
        }

        function getItemCorrectly(item) {
            if (item instanceof Function) {
                return item();
            } else {
                return item;
            }
        }

        return {
            detectDevice: function(regex, uaMarks) {
                var result = regex.exec(userAgentInfo.userAgent);

                if (!result) {
                    return getUnidentifiedItem(uaMarks);
                }

                for (var i = 1; i < result.length; i++) {
                    if (result[i]) {
                        if (uaMarks[result[i]]) {
                            return {
                                itemID: result[i],
                                item: getItemCorrectly(uaMarks[result[i]])
                            };
                        } else {
                            return getUnidentifiedItem(uaMarks, result[i]);
                        }
                    }
                }
            },

            detectOSorBrowser: function(regexSimple, regexComplex, uaMarks) {
                var markersWeight = {"Android" : 5, "IEMobile" : 10, "Version" : 15, "Version/" : 15, "Chrome" : 20,
                                     "CriOS" : 20, "CrMo": 20, "iPhone" : 30, "iPod" : 30,
                                     "iPad" : 30, "Mac OS X" : 30, "Trident" : 30, "MSIE" : 30};
                var result;
                var entityMarkers = [];

                while ((result = regexSimple.exec(userAgentInfo.userAgent)) != null) {
                    entityMarkers.push(result[1] + "|" + result[2]);
                }

                result = regexComplex.exec(userAgentInfo.userAgent);

                if (result) {
                    var entity, entityVersion;
                    for (var i = 1; i < result.length; i++) {
                        if (result[i]) {
                            if (Detect.Consts.isEntityVersion.test(result[i])) {
                                entityVersion = result[i];
                            } else {
                                entity = result[i];
                            }
                        }
                    }

                    if (entity) {
                        entityMarkers.push(entity + "|" + (entityVersion ? entityVersion : "Unidentified"));
                    }
                }

                function getEntity(marker) {
                    return marker.split("|")[0];
                }

                function getEntityVersion(marker) {
                    return marker.split("|")[1];
                }

                entityMarkers.sort(function (a, b) {
                    if (markersWeight[getEntity(a)] && !markersWeight[getEntity(b)]) {
                        return 1;
                    }
                    if (markersWeight[getEntity(a)] && markersWeight[getEntity(b)]) {
                        return markersWeight[getEntity(a)] - markersWeight[getEntity(b)];
                    }
                    return -1;
                });

                if (entityMarkers.length == 0) {
                    return getUnidentifiedItem(uaMarks);
                } else {
                    if (uaMarks[getEntity(entityMarkers[0])]) {
                        return {
                            itemID: getEntity(entityMarkers[0]),
                            item: getItemCorrectly(uaMarks[getEntity(entityMarkers[0])]),
                            itemVersion : getEntityVersion(entityMarkers[0]).replace(/_/g, ".")
                        };
                    } else {
                        return getUnidentifiedItem(uaMarks, getEntity(entityMarkers[0]));
                    }
                }
            },

            checkAnyOf: function(args, item) {
                if (!args.length) return false;

                for (var i = 0; i < args.length; i++) {
                    if (item == args[i]) {
                        return true;
                    }
                }

                return false;
            },

            /**
             * Simply compares two string version values.
             *
             * Example:
             * versionCompare('1.1', '1.2') => -1
             * versionCompare('1.1', '1.1') =>  0
             * versionCompare('1.2', '1.1') =>  1
             * versionCompare('2.23.3', '2.22.3') => 1
             *
             * Returns:
             * -1 = left is LOWER than right
             *  0 = they are equal
             *  1 = left is GREATER = right is LOWER
             *  And FALSE if one of input versions are not valid
             *
             * @function
             * @param {String} left  Version #1
             * @param {String} right Version #2
             * @return {Integer|Boolean}
             * @author Alexey Bass (albass)
             * @since 2011-07-14
             */
            versionCompare: function(left, right) {
                if (left === right) {
                    return 0;
                }
                if (typeof left + typeof right != 'stringstring' || isNaN(parseInt(left)) || isNaN(parseInt(right)))
                    return false;

                var a = left.split('.');
                var b = right.split('.');
                var i = 0;
                var len = Math.max(a.length, b.length);

                for (; i < len; i++) {
                    if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
                        return 1;
                    } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
                        return -1;
                    }
                }

                return 0;
            }
        };
    })();

    function addAllInfoMethodIfNeeded() {
        if (Detect.allInfo) return;

        Detect.allInfo = function() {
            return {
                type : this.Type.commercialName(),
                family : this.Family.commercialName(),
                device : this.Device.commercialName(),
                os : this.OS.commercialName(),
                osVersion : this.OS.version(),
                browser : this.Browser.commercialName(),
                browserVersion : this.Browser.version()
            }
        }
    }

    function constructDeviceIfNeeded() {
        if (Detect.Device) return;

        Detect.Device = (function() {
            var result, deviceID, device;
            result = deviceID = device = null;

            function cutOffDeviceIDAndTryAgain() {
                var deviceIDCutOff = Detect.Consts.deviceModelCutOff.exec(deviceID);
                //4 symbols after "-", e.g. SM-A710F >>> SM-A710 or SHV-E210N >> SHV-E210

                if (deviceIDCutOff) {
                    deviceIDCutOff = deviceIDCutOff[0];
                    var detectedDevice = Detect.Consts.DeviceUAMarks[deviceIDCutOff];
                    detectedDevice ? result.item = device = detectedDevice : null;
                }
            }

            return {
                init: function() {
                    result = helper.detectDevice(Detect.Consts.deviceRegex, Detect.Consts.DeviceUAMarks);
                    deviceID = result.itemID;
                    device = result.item;

                    if (result.item == Detect.D.Unidentified) {
                        cutOffDeviceIDAndTryAgain();
                    }

                    return result;
                },

                rawResult: function() {
                    return result.item;
                },

                rawID: function() {
                    return deviceID;
                },

                commercialName: function() {
                    return device.name;
                },

                is: function(deviceToCheck) {
                    return device == deviceToCheck;
                },

                isAnyOf: function() {
                    return helper.checkAnyOf(arguments, device);
                }
            };
        })();
    }

    function constructFamilyIfNeeded() {
        if (Detect.Family) return;

        Detect.Family = (function() {
            var family, deviceAndFamilyID;
            family = deviceAndFamilyID = null;

            return {
                init: function(detectedDevice) {
                    family = detectedDevice.item.family;
                    deviceAndFamilyID = detectedDevice.itemID;
                    return family;
                },

                rawResult: function() {
                    return family;
                },

                rawID: function() {
                    return deviceAndFamilyID;
                },

                commercialName: function() {
                    return family.name;
                },

                is: function(familyToCheck) {
                    return family == familyToCheck;
                },

                isAnyOf: function() {
                    return helper.checkAnyOf(arguments, family);
                }
            };
        })();
    }

    function constructTypeIfNeeded() {
        if (Detect.Type) return;

        Detect.Type = (function() {
            var type = null;

            function fallbackDetection(detectedFamily) {
                var ua = userAgentInfo.userAgent;

                /**
                 * Detecting if device is smart phone unfortunately unreliable across devices and browsers
                 * (for example UC Browser on Android adds "Mobile" word into user-agent even for tablets
                 * (maybe because they think the word 'mobile' itself should have different meaning - not smart
                 * phone only, but any 'mobile' device which is not 'desktop' or 'laptop').
                 * So it is better to specify by hands whether device is smart phone or not, as done inside F map,
                 * but for unknown devices - library will try to fallback to 'old school' approach by detecting
                 * "Mobile" or "Tablet" in user-agent.
                 */
                function isSmartPhone() {
                    return /Android.+UCBrowser/i.test(ua) ?
                        undefined : Detect.Consts.deviceIsSmartPhoneRegex.test(ua) &&
                        detectedFamily != Detect.F.Ipad && detectedFamily != Detect.F.Lumia;
                }

                function isTablet() {
                    return Detect.Consts.deviceIsTabletRegex.test(ua);
                }

                if (isSmartPhone()) {
                    return Detect.T.SmartPhone;
                } else if (isTablet()) {
                    return Detect.T.Tablet;
                } else {
                    return Detect.T.Unidentified;
                }
            }

            return {
                init: function(detectedFamily) {
                    type = detectedFamily.type;

                    if (type == Detect.T.Unidentified) {
                        type = fallbackDetection(detectedFamily);
                    }
                },

                commercialName: function() {
                    return type.name;
                },

                is: function(typeToCheck) {
                    return type == typeToCheck;
                },

                isAnyOf: function() {
                    return helper.checkAnyOf(arguments, type);
                }
            };
        })();
    }

    function constructOsIfNeeded() {
        if (Detect.OS) return;

        Detect.OS = (function() {
            var osID, os, osVersionRaw;
            osID = os = osVersionRaw = null;

            return {
                init: function() {
                    var result = helper.detectOSorBrowser(Detect.Consts.osRegexSimple,
                        Detect.Consts.osRegexComplex, Detect.Consts.OsUAMarks);
                    osID = result.itemID;
                    os = result.item;
                    osVersionRaw = result.itemVersion;
                },

                rawResult: function() {
                    return os;
                },

                rawID: function() {
                    return osID;
                },

                commercialName: function() {
                    return os.name;
                },

                is: function(osToCheck) {
                    return os == osToCheck;
                },

                isAnyOf: function() {
                    return helper.checkAnyOf(arguments, os);
                },

                version: function() {
                    return osVersionRaw;
                },

                versionIs: function(version) {
                    return helper.versionCompare(osVersionRaw.substring(0, version.length), version) == 0;
                },

                versionIsExactly: function(version) {
                    return helper.versionCompare(osVersionRaw, version) === 0;
                },

                versionIsLaterThan: function(version) {
                    return helper.versionCompare(osVersionRaw, version) === 1;
                },

                versionIsEarlierThan: function(version) {
                    return helper.versionCompare(osVersionRaw, version) === -1;
                }
            };
        })();
    }

    function constructBrowserIfNeeded() {
        if (Detect.Browser) return;

        Detect.Browser = (function() {
            var browserID, browser, browserVersionRaw;
            browserID = browser = browserVersionRaw = null;

            return {
                init: function() {
                    var result = helper.detectOSorBrowser(Detect.Consts.browserRegexSimple,
                        Detect.Consts.browserRegexComplex, Detect.Consts.BrowserUAMarks);
                    browserID = result.itemID;
                    browser = result.item;
                    browserVersionRaw = result.itemVersion;
                },

                rawResult: function() {
                    return browser;
                },

                rawID: function() {
                    return browserID;
                },

                commercialName: function() {
                    return browser.name;
                },

                is: function(browserToCheck) {
                    return browser == browserToCheck;
                },

                isAnyOf: function() {
                    return helper.checkAnyOf(arguments, browser);
                },

                version: function() {
                    return browserVersionRaw;
                },

                versionIs: function(version) {
                    return helper.versionCompare(browserVersionRaw.substring(0, version.length), version) == 0;
                },

                versionIsExactly: function(version) {
                    return helper.versionCompare(browserVersionRaw, version) === 0;
                },

                versionIsLaterThan: function(version) {
                    return helper.versionCompare(browserVersionRaw, version) === 1;
                },

                versionIsEarlierThan: function(version) {
                    return helper.versionCompare(browserVersionRaw, version) === -1;
                }
            };
        })();
    }

    return {
        init: function (userAgentInfoObj) {
            userAgentInfo = userAgentInfoObj;

            addAllInfoMethodIfNeeded();
            constructDeviceIfNeeded();
            constructFamilyIfNeeded();
            constructTypeIfNeeded();
            constructOsIfNeeded();
            constructBrowserIfNeeded();

            var detectedDevice = Detect.Device.init();
            var detectedFamily = Detect.Family.init(detectedDevice);
            Detect.Type.init(detectedFamily);
            Detect.OS.init();
            Detect.Browser.init();
        }
    }
})());