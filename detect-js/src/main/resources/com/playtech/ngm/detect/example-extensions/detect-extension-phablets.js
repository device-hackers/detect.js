Detect.registerExtension((function() {
    var userAgentInfo;

    function extendTypeIfNeeded() {
        if (Detect.T.Phablet) return;

        Detect.extend(Detect.T, {
            Phablet : {name: "Phablet"}
        });
    }

    function extendFamilyIfNeeded() {
        if (Detect.F.Iphone.type == Detect.T.Phablet) return;

        Detect.extend(Detect.F, {
            Iphone: {type: Detect.T.Phablet}
        });
    }

    return {
        init: function(userAgentInfoObj) {
            userAgentInfo = userAgentInfoObj;

            extendTypeIfNeeded();
            extendFamilyIfNeeded();
        }
    }
})());