Detect.registerExtension((function() {
    var userAgentInfo;

    function extendDeviceIfNeeded() {
        if (Detect.D.Iphone5.width) return;

        Detect.extend(Detect.D, {
            Iphone5: {width: 1136, height: 640},
            Nexus5: {width: 1920, height: 1080},
            IpadRetina: {width: 1024, height: 768}
        });

        Detect.Device.width = function() {
            return this.rawResult().width;
        };

        Detect.Device.height = function() {
            return this.rawResult().height;
        };
    }

    return {
        init: function(userAgentInfoObj) {
            userAgentInfo = userAgentInfoObj;
            extendDeviceIfNeeded();
        }
    }
})());