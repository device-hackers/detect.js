Detect.registerExtension((function() {
    var userAgentInfo;

    function extendFamilyIfNeeded() {
        if (Detect.F.Iphone.extraInfo) return;

        Detect.extend(Detect.F, {
            Iphone: {extraInfo: "iPhone family extra info"},
            GalaxyS5: {extraInfo: "Galaxy S5 family extra info"},
            Ipad: {extraInfo: "iPad family extra info"},
            Desktop: {extraInfo: "Desktop family extra info"}
        });

        Detect.Family.extraInfo = function() {
            return this.rawResult().extraInfo;
        };
    }

    function extendDeviceIfNeeded() {
        if (Detect.D.Iphone5.extraInfo) return;

        Detect.extend(Detect.D, {
            Iphone5: {extraInfo: "iPhone 5 extra info"},
            GalaxyS5: {extraInfo: "Galaxy S5 extra info"},
            Ipad: {extraInfo: "iPad extra info"},
            Desktop: {extraInfo: "Desktop extra info"}
        });

        Detect.Device.extraInfo = function() {
            return this.rawResult().extraInfo;
        };
    }

    function extendOsIfNeeded() {
        if (Detect.O.Ios.extraInfo) return;

        Detect.extend(Detect.O, {
            Ios: {extraInfo: "iOS extra info"},
            Android: {extraInfo: "Android extra info"},
            Windows: {extraInfo: "Windows extra info"}
        });

        Detect.OS.extraInfo = function() {
            return this.rawResult().extraInfo;
        };
    }

    function extendBrowserIfNeeded() {
        if (Detect.B.Safari.extraInfo) return;

        Detect.extend(Detect.B, {
            Safari: {extraInfo: "Safari extra info"},
            Chrome: {extraInfo: "Chrome extra info"},
            Firefox: {extraInfo: "Firefox extra info"}
        });

        Detect.Browser.extraInfo = function() {
            return this.rawResult().extraInfo;
        };
    }

    return {
        init: function(userAgentInfoObj) {
            userAgentInfo = userAgentInfoObj;

            extendFamilyIfNeeded();
            extendDeviceIfNeeded();
            extendOsIfNeeded();
            extendBrowserIfNeeded();
        }
    }
})());