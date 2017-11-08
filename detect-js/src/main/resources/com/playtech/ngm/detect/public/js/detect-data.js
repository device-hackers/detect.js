if (window.Detect && console && console.error) {
    console.error("Detect.js initialization collision, global variable Detect exist!");
} else {
    Detect = (function() {
        var dataVersion = "1.0";
        var userAgentInfo;
        var extensions = [];

        function initData() {
            !Detect.T ? Detect.T = {
                Unidentified : {name: "Unidentified"},
                SmartPhone : {name: "Smartphone"},
                Tablet : {name: "Tablet"},
                Desktop : {name: "Desktop"}
            } : null;

            !Detect.F ? Detect.F = {
                Unidentified : {name: "Unidentified", type: Detect.T.Unidentified},
                Iphone : {name: "Apple - iPhone Family", type: Detect.T.SmartPhone},
                Ipad : {name: "Apple - iPad Family", type: Detect.T.Tablet},
                Ipod : {name: "Apple - iPod Family", type: Detect.T.SmartPhone},
                NexusSmartPhones : {name: "Google - Nexus Family", type: Detect.T.SmartPhone},
                NexusTablets : {name: "Google - Nexus Family", type: Detect.T.Tablet},
                GalaxyA : {name: "Samsung - Galaxy A Family", type: Detect.T.SmartPhone},
                GalaxyS : {name: "Samsung - Galaxy S Family", type: Detect.T.SmartPhone},
                GalaxyNote : {name: "Samsung - Galaxy Note Family", type: Detect.T.SmartPhone},
                GalaxyTab : {name: "Samsung - Galaxy Tab Family", type: Detect.T.Tablet},
                GalaxyTabS : {name: "Samsung - Galaxy Tab S Family", type: Detect.T.Tablet},
                HtcOne : {name: "HTC - One Family", type: Detect.T.SmartPhone},
                XperiaZ : {name: "Sony - Xperia Z Family", type: Detect.T.SmartPhone},
                MotorolaMotoG : {name: "Motorola - Moto G Family", type: Detect.T.SmartPhone},
                LGG : {name: "LG - G Family", type: Detect.T.SmartPhone},
                MeizuMX : {name: "Meizu - MX Family", type: Detect.T.SmartPhone},
                XiaomiMi : {name: "Xiaomi - Mi Family", type: Detect.T.SmartPhone},
                LenovoTab : {name: "Lenovo - Tab Family", type: Detect.T.Tablet},
                LenovoA : {name: "Lenovo - A Family", type: Detect.T.SmartPhone},
                Lumia : {name: "Nokia - Lumia Family", type: Detect.T.SmartPhone},
                UnidentifiedDesktop : {name: "Unidentified - Desktop", type: Detect.T.Desktop}
            } : null;

            !Detect.D ? Detect.D = {
                Unidentified : {name : "Unidentified", family : Detect.F.Unidentified},
                Iphone6Plus : {name : "Apple - iPhone 6 Plus", family : Detect.F.Iphone},
                Iphone6 : {name : "Apple - iPhone 6", family : Detect.F.Iphone},
                Iphone5 : {name : "Apple - iPhone 5", family : Detect.F.Iphone},
                Iphone4 : {name : "Apple - iPhone 4", family : Detect.F.Iphone},
                Ipod : {name : "Apple - iPod", family : Detect.F.Iphone},
                IpadPro129 : {name : "Apple - iPad Pro 12.9'", family : Detect.F.Ipad},
                IpadRetina : {name : "Apple - iPad Retina", family : Detect.F.Ipad},
                Ipad : {name : "Apple - iPad", family : Detect.F.Ipad},
                Nexus6P : {name : "Google - Nexus 6P", family : Detect.F.NexusSmartPhones},
                Nexus5X : {name : "Google - Nexus 5X", family : Detect.F.NexusSmartPhones},
                Nexus6 : {name : "Google - Nexus 6", family : Detect.F.NexusSmartPhones},
                Nexus5 : {name : "Google - Nexus 5", family : Detect.F.NexusSmartPhones},
                Nexus4 : {name : "Google - Nexus 4", family : Detect.F.NexusSmartPhones},
                GalaxyNexus : {name : "Google - Galaxy Nexus", family : Detect.F.NexusSmartPhones},
                NexusS : {name : "Google - Nexus S", family : Detect.F.NexusSmartPhones},
                NexusOne : {name : "Google - Nexus One", family : Detect.F.NexusSmartPhones},
                Nexus9 : {name : "Google - Nexus 9", family : Detect.F.NexusTablets},
                Nexus10 : {name : "Google - Nexus 10", family : Detect.F.NexusTablets},
                Nexus7 : {name : "Google - Nexus 7", family : Detect.F.NexusTablets},
                GalaxyTabS2_9_7 : {name : "Samsung - Galaxy Tab S2 9.7", family : Detect.F.GalaxyTabS},
                GalaxyTabS2_8_0 : {name : "Samsung - Galaxy Tab S2 8.0", family : Detect.F.GalaxyTabS},
                GalaxyTabS10_5 : {name : "Samsung - Galaxy Tab S 10.5", family : Detect.F.GalaxyTabS},
                GalaxyTabS8_4 : {name : "Samsung - Galaxy Tab S 8.4", family : Detect.F.GalaxyTabS},
                GalaxyTabA9_7 : {name : "Samsung - Galaxy Tab A 9.7", family : Detect.F.GalaxyTab},
                GalaxyTabA8_0 : {name : "Samsung - Galaxy Tab A 8.0", family : Detect.F.GalaxyTab},
                GalaxyTabPro12_2 : {name : "Samsung - Galaxy Tab Pro 12.2", family : Detect.F.GalaxyTab},
                GalaxyTabPro10_1 : {name : "Samsung - Galaxy Tab Pro 10.1", family : Detect.F.GalaxyTab},
                GalaxyTabPro8_4 : {name : "Samsung - Galaxy Tab Pro 8.4", family : Detect.F.GalaxyTab},
                GalaxyTab4_10_1_2015 : {name : "Samsung - Galaxy Tab 4 10.1 (2015)", family : Detect.F.GalaxyTab},
                GalaxyTab4_10_1_LTE : {name : "Samsung - Galaxy Tab 4 10.1 LTE", family : Detect.F.GalaxyTab},
                GalaxyTab4_10_1_3G : {name : "Samsung - Galaxy Tab 4 10.1 3G", family : Detect.F.GalaxyTab},
                GalaxyTab4_10_1 : {name : "Samsung - Galaxy Tab 4 10.1", family : Detect.F.GalaxyTab},
                GalaxyTab4_8_0 : {name : "Samsung - Galaxy Tab 4 8.0", family : Detect.F.GalaxyTab},
                GalaxyTab4_7_0 : {name : "Samsung - Galaxy Tab 4 7.0", family : Detect.F.GalaxyTab},
                GalaxyTab3_10_1 : {name : "Samsung - Galaxy Tab 3 10.1", family : Detect.F.GalaxyTab},
                GalaxyTab3_8_0 : {name : "Samsung - Galaxy Tab 3 8.0", family : Detect.F.GalaxyTab},
                GalaxyTab3_7_0 : {name : "Samsung - Galaxy Tab 3 7.0", family : Detect.F.GalaxyTab},
                GalaxyTab2_10_1 : {name : "Samsung - Galaxy Tab 2 10.1", family : Detect.F.GalaxyTab},
                GalaxyTab2_7_0 : {name : "Samsung - Galaxy Tab 2 7.0", family : Detect.F.GalaxyTab},
                GalaxyTab10_1 : {name : "Samsung - Galaxy Tab 10.1", family : Detect.F.GalaxyTab},
                GalaxyTab8_9 : {name : "Samsung - Galaxy Tab 8.9", family : Detect.F.GalaxyTab},
                GalaxyTab7_7 : {name : "Samsung - Galaxy Tab 7.7", family : Detect.F.GalaxyTab},
                GalaxyTab7_0 : {name : "Samsung - Galaxy Tab 7.0", family : Detect.F.GalaxyTab},
                GalaxyS7Edge : {name : "Samsung - Galaxy S7 Edge", family : Detect.F.GalaxyS},
                GalaxyS7 : {name : "Samsung - Galaxy S7", family : Detect.F.GalaxyS},
                GalaxyS6EdgePlus : {name : "Samsung - Galaxy S6 Edge+", family : Detect.F.GalaxyS},
                GalaxyS6Edge : {name : "Samsung - Galaxy S6 Edge", family : Detect.F.GalaxyS},
                GalaxyS6 : {name : "Samsung - Galaxy S6", family : Detect.F.GalaxyS},
                GalaxyS5LTE : {name : "Samsung - Galaxy S5 LTE", family : Detect.F.GalaxyS},
                GalaxyS5Mini : {name : "Samsung - Galaxy S5 Mini", family : Detect.F.GalaxyS},
                GalaxyS5 : {name : "Samsung - Galaxy S5", family : Detect.F.GalaxyS},
                GalaxyS4Mini : {name : "Samsung - Galaxy S4 Mini", family : Detect.F.GalaxyS},
                GalaxyS4Zoom : {name : "Samsung - Galaxy S4 Zoom", family : Detect.F.GalaxyS},
                GalaxyS4 : {name : "Samsung - Galaxy S4", family : Detect.F.GalaxyS},
                GalaxyS3Slim : {name : "Samsung - Galaxy S3 Slim", family : Detect.F.GalaxyS},
                GalaxyS3Mini : {name : "Samsung - Galaxy S3 Mini", family : Detect.F.GalaxyS},
                GalaxyS3 : {name : "Samsung - Galaxy S3", family : Detect.F.GalaxyS},
                GalaxyS2LTE : {name : "Samsung - Galaxy S2 LTE", family : Detect.F.GalaxyS},
                GalaxyS2 : {name : "Samsung - Galaxy S2", family : Detect.F.GalaxyS},
                GalaxyS : {name : "Samsung - Galaxy S", family : Detect.F.GalaxyS},
                GalaxyA7 : {name : "Samsung - Galaxy A7", family : Detect.F.GalaxyA},
                GalaxyNotePro12_2 : {name : "Samsung - Galaxy Note Pro 12.2", family : Detect.F.GalaxyNote},
                GalaxyNote10_1_2014 : {name : "Samsung - Galaxy Note 10.1 2014 Edition", family : Detect.F.GalaxyNote},
                GalaxyNote10_1 : {name : "Samsung - Galaxy Note 10.1", family : Detect.F.GalaxyNote},
                GalaxyNoteEdge : {name : "Samsung - Galaxy Note Edge", family : Detect.F.GalaxyNote},
                GalaxyNote5 : {name : "Samsung - Galaxy Note 5", family : Detect.F.GalaxyNote},
                GalaxyNote4Duos : {name : "Samsung - Galaxy Note 4 Duos", family : Detect.F.GalaxyNote},
                GalaxyNote4 : {name : "Samsung - Galaxy Note 4", family : Detect.F.GalaxyNote},
                GalaxyNote3Neo : {name : "Samsung - Galaxy Note 3 Neo", family : Detect.F.GalaxyNote},
                GalaxyNote3 : {name : "Samsung - Galaxy Note 3", family : Detect.F.GalaxyNote},
                GalaxyNote2 : {name : "Samsung - Galaxy Note 2", family : Detect.F.GalaxyNote},
                GalaxyNote : {name : "Samsung - Galaxy Note", family : Detect.F.GalaxyNote},
                GalaxyNote8_0 : {name : "Samsung - Galaxy Note 8.0", family : Detect.F.GalaxyNote},
                HtcOne : {name : "HTC - One", family : Detect.F.HtcOne},
                XperiaZ : {name : "Sony - Xperia Z", family : Detect.F.XperiaZ},
                MotorolaMotoG2 : {name : "Motorola - Moto G (2nd gen)", family : Detect.F.MotorolaMotoG},
                MotorolaMotoG : {name : "Motorola - Moto G", family : Detect.F.MotorolaMotoG},
                LGG5 : {name : "LG - G5", family : Detect.F.LGG},
                LGG4 : {name : "LG - G4", family : Detect.F.LGG},
                LGG3 : {name : "LG - G3", family : Detect.F.LGG},
                LGG2 : {name : "LG - G2", family : Detect.F.LGG},
                MeizuMX4Pro : {name : "Meizu - MX 4 Pro", family : Detect.F.MeizuMX},
                MeizuMX4 : {name : "Meizu - MX 4", family : Detect.F.MeizuMX},
                XiaomiMi4LTE : {name : "Xiaomi - Mi 4LTE", family : Detect.F.XiaomiMi},
                XiaomiMi4W : {name : "Xiaomi - Mi 4W", family : Detect.F.XiaomiMi},
                XiaomiMi4 : {name : "Xiaomi - Mi 4", family : Detect.F.XiaomiMi},
                XiaomiMi3 : {name : "Xiaomi - Mi 3", family : Detect.F.XiaomiMi},
                LenovoTab2A730HC : {name : "Lenovo - Tab 2 A7-30", family : Detect.F.LenovoTab},
                LenovoA889 : {name : "Lenovo - A889", family : Detect.F.LenovoA},
                LenovoA850 : {name : "Lenovo - A850", family : Detect.F.LenovoA},
                Lumia925 : {name : "Nokia - Lumia 925", family : Detect.F.Lumia},
                Lumia920 : {name : "Nokia - Lumia 920", family : Detect.F.Lumia},
                Lumia820 : {name : "Nokia - Lumia 820", family : Detect.F.Lumia},
                Lumia635 : {name : "Nokia - Lumia 635", family : Detect.F.Lumia},
                UnidentifiedDesktop : {name : "Unidentified - Desktop", family : Detect.F.UnidentifiedDesktop}
            } : null;

            !Detect.O ? Detect.O = {
                Unidentified : {name : "Unidentified"},
                Ios : {name : "Apple - iOS"},
                Android : {name : "Google - Android"},
                WindowsPhone : {name : "Microsoft - Windows Phone"},
                Windows : {name : "Microsoft - Windows"},
                MacOS : {name : "Apple - Mac OS"},
                Unix : {name : "Unix based"},
                FireOS : {name : "Amazon - Fire OS"}
            } : null;

            !Detect.B ? Detect.B = {
                Unidentified : { name : "Unidentified"},
                Safari : { name : "Apple - Safari"},
                Chrome : { name : "Google - Chrome"},
                AndroidWebView : { name : "Android WebView"},
                AndroidWebkit : { name : "Android Browser"},
                AndroidWebkitChrome : { name : "Android Browser Chromium"},
                SamsungBrowser : { name : "Samsung - Samsung Browser"},
                Ie : { name : "Microsoft - Internet Explorer"},
                IeDesktopMode : { name : "Microsoft - Internet Explorer Mobile in Desktop Mode"},
                Edge : { name : "Microsoft - Edge"},
                UcBrowser : { name : "UCWeb - UC Browser"},
                Firefox : { name : "Mozilla - Firefox"},
                BaiduBrowser : { name : "Baidu - Baidu Browser"},
                DUBrowser : { name : "Baidu - DU Browser"},
                QQBrowser : { name : "Tencent Technology - QQ Browser"},
                _360Browser : { name : "360.cn - 360 Security Browser"},
                Opera : { name : "Opera Software - Opera"},
                YandexBrowser : { name : "Yandex - Yandex Browser"},
                Maxthon : { name : "Maxthon  - Maxthon Browser"},
                Silk : { name : "Amazon - Silk"}
            } : null;

            !Detect.Consts ? Detect.Consts = {
                unidentified : "Unidentified",
                deviceIsSmartPhoneRegex : /(?:\sMobile|Lumia)/i,
                deviceIsTabletRegex : /(?:\sTablet)/i,
                deviceModelCutOff : /(\w+-\w{4})/i,
                isEntityVersion : /\d+(?:\.|_)\d+|^\d+$/,
                deviceRegex : /.*;\s?(?:SAMSUNG\s|)(.+)\sBuild|\((\w+);.+CPU|Trident.+;\s(\w+\s\d+)|(Macintosh)|(Windows)(?!\sPhone)(?!.+WPDesktop)|(X11)|(WPDesktop)|(Lenovo.+?)\//i,
                osRegexSimple : /(Android |Android\/|iPhone|iPod|iPad|Windows Phone|Windows NT|Intel Mac OS X).*?(\d\S[^;) ]+)/gi,
                osRegexComplex : /(X11|KFAPWI|Android;|Maemo|MeeGo)()/i,
                browserRegexSimple : /(iPhone|iPod|iPad|Chrome|CriOS|CrMo|SamsungBrowser|Edge|IEMobile|MSIE|UCBrowser|UBrowser|OPR|Opera|Firefox|FxiOS|bdbrowser_i18n|bdbrowser|baidubrowser|MQQBrowser|360 Aphone Browser|Silk|YaBrowser|MxBrowser|Maxthon).*?(\d\S[^;) ]+)/gi,
                browserRegexComplex : /Android.*?(\d\S[^;) ]+).+?(Version)(?!.+Chrome)|(wv).+?Chrome.*?(\d\S[^;) ]+)|(Version\/).+?Chrome.*?(\d\S[^;) ]+)|(Trident).+?rv:.*?(\d\S[^;) ]+)|(Intel Mac OS X).+?Version.*?(\d\S[^;) ]+)|Android\/.*?(\d\S[^;) ]+).+?(Browser\/AppleWebKit)/i,

                DeviceUAMarks : {
                    "Unidentified" : Detect.D.Unidentified,
                    "SM-T800" : Detect.D.GalaxyTabS10_5,
                    "SM-T533" : Detect.D.GalaxyTab4_10_1_2015,
                    "SM-T535" : Detect.D.GalaxyTab4_10_1_LTE,
                    "SM-T531" : Detect.D.GalaxyTab4_10_1_3G,
                    "SM-T530" : Detect.D.GalaxyTab4_10_1,
                    "GT-P5210" : Detect.D.GalaxyTab3_10_1,
                    "GT-P5100" : Detect.D.GalaxyTab2_10_1,
                    "SM-T210" : Detect.D.GalaxyTab3_7_0,
                    "SM-N9100" : Detect.D.GalaxyNote4Duos,
                    "SM-N910" : Detect.D.GalaxyNote4,
                    "SM-N900" : Detect.D.GalaxyNote3,
                    "GT-N7100" : Detect.D.GalaxyNote2,
                    "SM-G930" : Detect.D.GalaxyS7,
                    "SM-G925" : Detect.D.GalaxyS6Edge,
                    "SM-G920" : Detect.D.GalaxyS6,
                    "SM-G900" : Detect.D.GalaxyS5,
                    "GT-I950" : Detect.D.GalaxyS4,
                    "SHV-E300" : Detect.D.GalaxyS4,
                    "GT-I930" : Detect.D.GalaxyS3,
                    "SHV-E210" : Detect.D.GalaxyS3,
                    "SGH-T999" : Detect.D.GalaxyS3,
                    "SGH-I747" : Detect.D.GalaxyS3,
                    "SGH-N064" : Detect.D.GalaxyS3,
                    "SGH-N035" : Detect.D.GalaxyS3,
                    "SC-06D" : Detect.D.GalaxyS3,
                    "SC-03E" : Detect.D.GalaxyS3,
                    "SCL21" : Detect.D.GalaxyS3,
                    "SCH-J021" : Detect.D.GalaxyS3,
                    "SCH-R530" : Detect.D.GalaxyS3,
                    "SCH-I535" : Detect.D.GalaxyS3,
                    "SCH-I939" : Detect.D.GalaxyS3,
                    "SPH-L710" : Detect.D.GalaxyS3,
                    "GT-I910" : Detect.D.GalaxyS2,
                    "GT-I920" : Detect.D.GalaxyS2,
                    "SGH-I757" : Detect.D.GalaxyS2,
                    "SM-A710" : Detect.D.GalaxyA7,
                    "HTC One" : Detect.D.HtcOne,
                    "HTC_One" : Detect.D.HtcOne,
                    "C6602" : Detect.D.XperiaZ,
                    "XT1068" : Detect.D.MotorolaMotoG2,
                    "XT1032" : Detect.D.MotorolaMotoG,
                    "LG-H818" : Detect.D.LGG4,
                    "LG-D855" : Detect.D.LGG3,
                    "LG-D802" : Detect.D.LGG2,
                    "Nexus 6P" : Detect.D.Nexus6P,
                    "Nexus 5X" : Detect.D.Nexus5X,
                    "Nexus 9" : Detect.D.Nexus9,
                    "Nexus 10" : Detect.D.Nexus10,
                    "Nexus 7" : Detect.D.Nexus7,
                    "Nexus 6" : Detect.D.Nexus6,
                    "Nexus 5" : Detect.D.Nexus5,
                    "Nexus 4" : Detect.D.Nexus4,
                    "MX4 Pro" : Detect.D.MeizuMX4Pro,
                    "MX4" : Detect.D.MeizuMX4,
                    "MI 4LTE" : Detect.D.XiaomiMi4LTE,
                    "MI 4W" : Detect.D.XiaomiMi4W,
                    "MI 4" : Detect.D.XiaomiMi4,
                    "MI 3" : Detect.D.XiaomiMi3,
                    "MI 3W" : Detect.D.XiaomiMi3,
                    "Lenovo TAB 2 A7-30HC" : Detect.D.LenovoTab2A730HC,
                    "Lenovo A889" : Detect.D.LenovoA889,
                    "Lenovo-A889" : Detect.D.LenovoA889,
                    "Lenovo A850" : Detect.D.LenovoA850,
                    "A850" : Detect.D.LenovoA850,
                    "Lumia 635" : Detect.D.Lumia635,
                    "Lumia 820" : Detect.D.Lumia820,
                    "Lumia 920" : Detect.D.Lumia920,
                    "Lumia 925" : Detect.D.Lumia925,
                    "Macintosh" : Detect.D.UnidentifiedDesktop,
                    "Windows" : Detect.D.UnidentifiedDesktop,
                    "X11" : Detect.D.UnidentifiedDesktop,
                    "WPDesktop" : Detect.D.UnidentifiedDesktop,

                    "iPhone": function() {
                        return userAgentInfo.widerSide == 480 ? Detect.D.Iphone4 :
                                userAgentInfo.widerSide == 568 ? Detect.D.Iphone5 :
                                userAgentInfo.widerSide == 667 ? Detect.D.Iphone6 :
                                userAgentInfo.widerSide == 736 ? Detect.D.Iphone6Plus : { name : "iPhone" };
                    },

                    "iPad": function() {
                        if (userAgentInfo.widerSide == 1366) {
                            return Detect.D.IpadPro129;
                        } else {
                            return userAgentInfo.devicePixelRatio == 1 ? Detect.D.Ipad : Detect.D.IpadRetina;
                        }
                    }
                },

                OsUAMarks : {
                    "Unidentified" : Detect.O.Unidentified,
                    "Android " : Detect.O.Android,
                    "Android;" : Detect.O.Android,
                    "Android/" : Detect.O.Android,
                    "iPhone" : Detect.O.Ios,
                    "iPad" : Detect.O.Ios,
                    "iPod" : Detect.O.Ios,
                    "Windows Phone" : Detect.O.WindowsPhone,
                    "Windows NT" : Detect.O.Windows,
                    "Intel Mac OS X" : Detect.O.MacOS,
                    "X11" : Detect.O.Unix,
                    "KFAPWI" : Detect.O.FireOS
                },

                BrowserUAMarks : {
                    "Unidentified" : Detect.B.Unidentified,
                    "Chrome" : Detect.B.Chrome,
                    "CriOS" : Detect.B.Chrome,
                    "CrMo" : Detect.B.Chrome,
                    "wv" : Detect.B.AndroidWebView,
                    "Version/" : Detect.B.AndroidWebkitChrome,
                    "Version" : Detect.B.AndroidWebkit,
                    "Browser/AppleWebKit" : Detect.B.AndroidWebkit,
                    "SamsungBrowser" : Detect.B.SamsungBrowser,
                    "Intel Mac OS X" : Detect.B.Safari,
                    "iPhone" : Detect.B.Safari,
                    "iPad" : Detect.B.Safari,
                    "iPod" : Detect.B.Safari,
                    "IEMobile" : Detect.B.Ie,
                    "Trident" : Detect.B.Ie,
                    "MSIE" : Detect.B.Ie,
                    "Edge" : Detect.B.Edge,
                    "UCBrowser" : Detect.B.UcBrowser,
                    "UBrowser" : Detect.B.UcBrowser,
                    "Firefox" : Detect.B.Firefox,
                    "FxiOS" : Detect.B.Firefox,
                    "bdbrowser_i18n" : Detect.B.BaiduBrowser,
                    "baidubrowser" : Detect.B.BaiduBrowser,
                    "bdbrowser" : Detect.B.DUBrowser,
                    "MQQBrowser" : Detect.B.QQBrowser,
                    "360 Aphone Browser" : Detect.B._360Browser,
                    "OPR" : Detect.B.Opera,
                    "Opera" : Detect.B.Opera,
                    "YaBrowser" : Detect.B.YandexBrowser,
                    "MxBrowser" : Detect.B.Maxthon,
                    "Maxthon" : Detect.B.Maxthon,
                    "Silk" : Detect.B.Silk
                }
            } : null;

            console.log("[Detect] Initialized data sdfsd");
        }

        function initExtensions() {
            for (var i = 0; i < extensions.length; i++) {
                if (extensions[i].init && extensions[i].init instanceof Function) {
                    extensions[i].init(userAgentInfo);
                    console.log("[Detect] Initialized " + (i == 0 ? "logic" : "extension " + i));
                } else {
                    console.error("Can't initialize werrwe extension " + i + " due to missing init() method!");
                }
            }
        }

        function addWiderSideToInputIfNeeded() {
            if (userAgentInfo.screenWidth && userAgentInfo.screenHeight) {
                userAgentInfo.widerSide = Math.max(userAgentInfo.screenWidth, userAgentInfo.screenHeight);
            }
        }

        return {
            init: function(userAgentInfoObj) {
                userAgentInfo = userAgentInfoObj;

                if (userAgentInfo && userAgentInfo.userAgent && typeof userAgentInfo.userAgent == "string") {
                    addWiderSideToInputIfNeeded();
                    initData();
                    initExtensions();
                    console.info("[Detect] Initialization finished");
                } else {
                    console.error("Can't initialize Detect.js due to malformed input user agent info: " +
                        userAgentInfo + ". Expected '{userAgent : string}'");
                    console.dir(userAgentInfo);
                }
            },

            extend: function(map, extendedMap) {
                //Object.assign polyfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
                if (typeof Object.assign != 'function') {
                    Object.assign = function(target) {
                        'use strict';
                        if (target == null) {
                            throw new TypeError('Cannot convert undefined or null to object');
                        }

                        target = Object(target);
                        for (var index = 1; index < arguments.length; index++) {
                            var source = arguments[index];
                            if (source != null) {
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                        }
                        return target;
                    };
                }

                for (var item in map) {
                    Object.assign(map[item], extendedMap[item]);
                }
            },

            registerExtension: function(extension) {
                extensions.push(extension);
            }
        };
    })();
}