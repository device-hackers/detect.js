Detect.init({userAgent: navigator.userAgent});

QUnit.test("Self test on current device", function(assert) {
    assert.ok(Detect.Device.rawID(), "Detect.Device.rawID() == " + Detect.Device.rawID());
    assert.ok(Detect.Device.commercialName(), "Detect.Device.commercialName() == " + Detect.Device.commercialName());
    assert.ok(Detect.Family.commercialName(), "Detect.Family.commercialName() == " + Detect.Family.commercialName());
    assert.ok(Detect.Type.commercialName(), "Detect.Type.commercialName() == " + Detect.Type.commercialName());
    assert.ok(Detect.OS.rawID(), "Detect.OS.rawID() == " + Detect.OS.rawID());
    assert.ok(Detect.OS.commercialName(), "Detect.OS.commercialName() == " + Detect.OS.commercialName());
    assert.ok(Detect.OS.version(), "Detect.OS.version() == " + Detect.OS.version());
    assert.ok(Detect.Browser.rawID(), "Detect.Browser.rawID() == " + Detect.Browser.rawID());
    assert.ok(Detect.Browser.commercialName(), "Detect.Browser.commercialName() == " + Detect.Browser.commercialName());
    assert.ok(Detect.Browser.version(), "Detect.Browser.version() == " + Detect.Browser.version());
});

QUnit.test("Testing OS version [iPad 4, iOS 8, Chrome]", function(assert) {
    var mockObject = new MockObject({
        userAgent: "Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) " +
            "CriOS/38.0.2125.59 Mobile/12A405 Safari/600.1.4 (000296)"
    });
    Detect.init(mockObject);

    assert.ok(Detect.OS.version(), "Detect.OS.version() == " + Detect.OS.version() + mockObject);
    assert.ok(Detect.OS.versionIsExactly("8.0.2"), "Detect.OS.versionIsExactly('8.0.2')");
    assert.ok(Detect.OS.versionIs("8.0.2"), "Detect.OS.versionIs('8.0.2')");
    assert.ok(Detect.OS.versionIs("8.0"), "Detect.OS.versionIs('8.0')");
    assert.ok(Detect.OS.versionIs("8"), "Detect.OS.versionIs('8')");
    assert.ok(Detect.OS.versionIsLaterThan("8.0.1"), "Detect.OS.versionIsLaterThan('8.0.1')");
    assert.ok(Detect.OS.versionIsEarlierThan("8.0.3"), "Detect.OS.versionIsEarlierThan('8.0.3')");
    assert.ok(Detect.OS.versionIsLaterThan("7.9.2"), "Detect.OS.versionIsLaterThan('7.9.2')");
    assert.ok(Detect.OS.versionIsEarlierThan("8.1.2"), "Detect.OS.versionIsEarlierThan('8.1.2')");
    assert.ok(Detect.OS.versionIsLaterThan("7.0.2"), "Detect.OS.versionIsLaterThan('7.0.2')");
    assert.ok(Detect.OS.versionIsEarlierThan("9.0.2"), "Detect.OS.versionIsEarlierThan('9.0.2')");
    assert.ok(Detect.OS.versionIsLaterThan("7.9"), "Detect.OS.versionIsLaterThan('7.9')");
    assert.ok(Detect.OS.versionIsEarlierThan("8.1"), "Detect.OS.versionIsEarlierThan('8.1')");
    assert.ok(Detect.OS.versionIsLaterThan("7"), "Detect.OS.versionIsLaterThan('7')");
    assert.ok(Detect.OS.versionIsEarlierThan("9"), "Detect.OS.versionIsEarlierThan('9')");
    assert.ok(Detect.OS.versionIsLaterThan("8.0"), "Detect.OS.versionIsLaterThan('8.0')");
    assert.ok(Detect.OS.versionIsLaterThan("8"), "Detect.OS.versionIsLaterThan('8')");
});

QUnit.test("Testing browser version [iPad 4, iOS 8, Chrome]", function(assert) {
    var mockObject = new MockObject({
        userAgent: "Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) " +
            "CriOS/38.0.2125.59 Mobile/12A405 Safari/600.1.4 (000296)"
    });
    Detect.init(mockObject);

    assert.ok(Detect.Browser.version(), "Detect.Browser.version() == " + Detect.Browser.version() + mockObject);
    assert.ok(Detect.Browser.versionIsExactly("38.0.2125.59"), "Detect.Browser.versionIsExactly('38.0.2125.59')");
    assert.ok(Detect.Browser.versionIs("38.0.2125.59"), "Detect.Browser.versionIs('38.0.2125.59')");
    assert.ok(Detect.Browser.versionIs("38.0.2125"), "Detect.Browser.versionIs('38.0.2125')");
    assert.ok(Detect.Browser.versionIs("38.0"), "Detect.Browser.versionIs('38.0')");
    assert.ok(Detect.Browser.versionIs("38"), "Detect.Browser.versionIs('38')");
    assert.ok(Detect.Browser.versionIsLaterThan("38.0.2125.58"), "Detect.Browser.versionIsLaterThan('38.0.2125.58')");
    assert.ok(Detect.Browser.versionIsEarlierThan("38.0.2125.60"), "Detect.Browser.versionIsEarlierThan('38.0.2125.60')");
    assert.ok(Detect.Browser.versionIsLaterThan("38.0.2124.59"), "Detect.Browser.versionIsLaterThan('38.0.2124.59')");
    assert.ok(Detect.Browser.versionIsEarlierThan("38.0.2126.59"), "Detect.Browser.versionIsEarlierThan('38.0.2126.59')");
    assert.ok(Detect.Browser.versionIsLaterThan("37.9.2125.59"), "Detect.Browser.versionIsLaterThan('37.9.2125.59')");
    assert.ok(Detect.Browser.versionIsEarlierThan("38.1.2125.59"), "Detect.Browser.versionIsEarlierThan('38.1.2125.59')");
    assert.ok(Detect.Browser.versionIsLaterThan("37.0.2125.59"), "Detect.Browser.versionIsLaterThan('37.0.2125.59')");
    assert.ok(Detect.Browser.versionIsEarlierThan("39.0.2125.59"), "Detect.Browser.versionIsEarlierThan('39.0.2125.59')");
    assert.ok(Detect.Browser.versionIsLaterThan("38.0.2124"), "Detect.Browser.versionIsLaterThan('38.0.2124')");
    assert.ok(Detect.Browser.versionIsEarlierThan("38.0.2126"), "Detect.Browser.versionIsEarlierThan('38.0.2126')");
    assert.ok(Detect.Browser.versionIsLaterThan("37.9"), "Detect.Browser.versionIsLaterThan('37.9')");
    assert.ok(Detect.Browser.versionIsEarlierThan("38.1"), "Detect.Browser.versionIsEarlierThan('38.1')");
    assert.ok(Detect.Browser.versionIsLaterThan("37"), "Detect.Browser.versionIsLaterThan('37')");
    assert.ok(Detect.Browser.versionIsEarlierThan("39"), "Detect.Browser.versionIsEarlierThan('39')");
    assert.ok(Detect.Browser.versionIsLaterThan("38.0"), "Detect.Browser.versionIsLaterThan('38.0')");
    assert.ok(Detect.Browser.versionIsLaterThan("38"), "Detect.Browser.versionIsLaterThan('38')");
});

QUnit.test("Testing browser version [Galaxy Tab S, Android 4.4.2, Android Webkit]", function(assert) {
    var mockObject = new MockObject({
        userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; uk-ua; SAMSUNG SM-T800 Build/KOT49H) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Safari/537.36",
        browserVersion : "1.5"
    });
    Detect.init(mockObject);

    assert.ok(Detect.Browser.version(), "Detect.Browser.version() == " + Detect.Browser.version() + mockObject);
    assert.ok(Detect.Browser.versionIsExactly("28.0.1500.94"), "Detect.Browser.versionIsExactly('28.0.1500.94')");
    assert.ok(Detect.Browser.versionIs("28.0.1500.94"), "Detect.Browser.versionIs('28.0.1500.94')");
    assert.ok(Detect.Browser.versionIs("28"), "Detect.Browser.versionIs('28')");
    assert.ok(Detect.Browser.versionIsLaterThan("28.0"), "Detect.Browser.versionIsLaterThan('28.0')");
    assert.ok(Detect.Browser.versionIsEarlierThan("28.1"), "Detect.Browser.versionIsEarlierThan('28.1')");
    assert.ok(Detect.Browser.versionIsLaterThan("0.5"), "Detect.Browser.versionIsLaterThan('0.5')");
    assert.ok(Detect.Browser.versionIsEarlierThan("299.5"), "Detect.Browser.versionIsEarlierThan('299.5')");
    assert.ok(Detect.Browser.versionIsLaterThan("1"), "Detect.Browser.versionIsLaterThan('1')");
    assert.ok(Detect.Browser.versionIsEarlierThan("200"), "Detect.Browser.versionIsEarlierThan('200')");
    assert.ok(Detect.Browser.versionIsLaterThan("0"), "Detect.Browser.versionIsLaterThan('0')");
    assert.ok(Detect.Browser.versionIsLaterThan("-1"), "Detect.Browser.versionIsLaterThan('-1')");
});

function mainTest(mock, assert) {
    Detect.init(mock);

    //Testing device
    assert.ok(Detect.Device.rawID(), "Detect.Device.rawID() == '" + Detect.Device.rawID() + "'" + mock);

    assert.equal(Detect.Family.commercialName(), mock.family[0].name, "Detect.Family.commercialName() == '" + mock.family[0].name + "'");
    assert.ok(Detect.Family.is(mock.family[0]), "Detect.Family.is(" + mock.family[1] + ")");
    assert.ok(Detect.Family.isAnyOf(mock.family[0], Detect.F.Iphone), "Detect.Family.isAnyOf(" + mock.family[1] + ", Detect.F.Iphone)");

    assert.equal(Detect.Device.commercialName(), mock.device[0].name, "Detect.Device.commercialName() == '" + mock.device[0].name + "'");
    assert.ok(Detect.Device.is(mock.device[0]), "Detect.Device.is(" + mock.device[1] + ")");
    assert.ok(Detect.Device.isAnyOf(mock.device[0], Detect.D.Ipad), "Detect.Device.isAnyOf(" + mock.device[1] + ", Detect.D.Ipad)");

    assert.equal(Detect.Type.is(Detect.T.Unidentified), mock.isUnidentified, "Detect.Type.is(Detect.T.Unidentified) == '" + mock.isUnidentified + "'");
    assert.equal(Detect.Type.is(Detect.T.SmartPhone), mock.isSmartPhone,
            "Detect.Type.is(Detect.T.SmartPhone) == '" + mock.isSmartPhone + "'");
    assert.equal(Detect.Type.is(Detect.T.Tablet), mock.isTablet, "Detect.Type.is(Detect.T.Tablet) == '" + mock.isTablet + "'");
    assert.equal(Detect.Type.is(Detect.T.Desktop), mock.isDesktop, "Detect.Type.is(Detect.T.Desktop) == '" + mock.isDesktop + "'");

    //Testing OS
    assert.ok(Detect.OS.rawID(), "Detect.OS.rawID() == '" + Detect.OS.rawID() + "'");

    assert.equal(Detect.OS.commercialName(), mock.os[0].name, "Detect.OS.commercialName() == '" + mock.os[0].name + "'");
    assert.ok(Detect.OS.is(mock.os[0]), "Detect.OS.is(" + mock.os[1] + ")");
    assert.ok(Detect.OS.isAnyOf(mock.os[0], Detect.O.Android), "Detect.OS.isAnyOf(" + mock.os[1] + ", Detect.O.Android)");

    //Testing OS version
    assert.ok(Detect.OS.version(), "Detect.OS.version() == '" + Detect.OS.version() + "'");

    assert.ok(Detect.OS.versionIsExactly(mock.osVersion), "Detect.OS.versionIsExactly('" + mock.osVersion + "')");
    assert.ok(Detect.OS.versionIs(mock.osVersion), "Detect.OS.versionIs('" + mock.osVersion + "')");

    //Testing browser
    assert.ok(Detect.Browser.rawID(), "Detect.Browser.rawID() == '" + Detect.Browser.rawID() + "'");

    assert.equal(Detect.Browser.commercialName(), mock.browser[0].name, "Detect.Browser.commercialName() == '" + mock.browser[0].name + "'");
    assert.ok(Detect.Browser.is(mock.browser[0]), "Detect.Browser.is(" + mock.browser[1] + ")");
    assert.ok(Detect.Browser.isAnyOf(mock.browser[0], Detect.B.Chrome), "Detect.Browser.isAnyOf(" + mock.browser[1] + ", Detect.B.Chrome)");

    //Testing browser version
    assert.ok(Detect.Browser.version(), "Detect.Browser.version() == '" + Detect.Browser.version() + "'");

    assert.ok(Detect.Browser.versionIsExactly(mock.browserVersion), "Detect.Browser.versionIsExactly('" + mock.browserVersion + "')");
    assert.ok(Detect.Browser.versionIs(mock.browserVersion), "Detect.Browser.versionIs('" + mock.browserVersion + "')");
}

//**********************************************************************************************************************
QUnit.module("iPhone 7 Plus");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 10, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 " +
            "(KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.1",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "10.0.1"
        }) },
        { title : "iOS 10, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A403 Safari/601.1.46",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) },
        { title : "iOS 10, UC Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X; en-US) AppleWebKit/537.51.1 " +
            "(KHTML, like Gecko) Mobile/14A403 UCBrowser/10.8.4.865 Mobile",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.1",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "10.8.4.865"
        }) },
        { title : "iOS 10, Firefox", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 " +
            "(KHTML, like Gecko) FxiOS/5.3 Mobile/14A403 Safari/602.1.50",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.1",
            browser : [Detect.B.Firefox, "Detect.B.Firefox"],
            browserVersion : "5.3"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPhone 6S Plus");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 10, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 " +
            "(KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.1",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "10.0.1"
        }) },
        { title : "iOS 10, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A403 Safari/601.1.46",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPhone 6 Plus");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 9, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_4 like Mac OS X) AppleWebKit/601.1.46 " +
                "(KHTML, like Gecko) Version/9.0 Mobile/13G35 Safari/601.1",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.3.4",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "9.3.4"
        }) },
        { title : "iOS 9, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_4 like Mac OS X) AppleWebKit/601.1 " +
                "(KHTML, like Gecko) CriOS/52.0.2743.84 Mobile/13G35 Safari/601.1.46",
            screenWidth : 414,
            screenHeight : 736,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6Plus, "Detect.D.Iphone6Plus"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.3.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.84"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPhone 7");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 10, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.50 " +
            "(KHTML, like Gecko) Version/10.0 Mobile/14A346 Safari/602.1",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "10.0"
        }) },
        { title : "iOS 10, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A346 Safari/601.1.46",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) },
        { title : "iOS 10, UC Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X; en-US) AppleWebKit/537.51.1 " +
            "(KHTML, like Gecko) Mobile/14A346 UCBrowser/10.8.4.865 Mobile",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "10.8.4.865"
        }) },
        { title : "iOS 10, Firefox", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.50 " +
            "(KHTML, like Gecko) FxiOS/5.3 Mobile/14A346 Safari/602.1.50",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0",
            browser : [Detect.B.Firefox, "Detect.B.Firefox"],
            browserVersion : "5.3"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPhone 6S");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 9, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 " +
            "(KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.3.5",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "9.3.5"
        }) },
        { title : "iOS 9, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/13G36 Safari/601.1.46",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.3.5",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPhone 6");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 8, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 " +
            "(KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "8.1.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "8.1.2"
        }) },
        { title : "iOS 8, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 " +
            "(KHTML, like Gecko) CriOS/47.0.2526.107 Mobile/12B440 Safari/600.1.4 (000687)",
            screenWidth : 375,
            screenHeight : 667,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone6, "Detect.D.Iphone6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "8.1.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "47.0.2526.107"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPhone 5S");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 10, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/602.1.50 " +
            "(KHTML, like Gecko) Version/10.0 Mobile/14A456 Safari/602.1",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "10.0.2"
        }) },
        { title : "iOS 10, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPhone 5");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 8, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 " +
                "(KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "8.0.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "8.0.2"
        }) },
        { title : "iOS 8, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 " +
                "(KHTML, like Gecko) CriOS/38.0.2125.59 Mobile/12A405 Safari/600.1.4 (000701)",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "8.0.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "38.0.2125.59"
        }) },
        { title : "iOS 8, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 " +
                "(KHTML, like Gecko) Mobile/12A405",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "8.0.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "8.0.2"
        }) },
        { title : "iOS 7, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 " +
                "(KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "7.1.2"
        }) },
        { title : "iOS 7, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 " +
                "(KHTML, like Gecko) CriOS/38.0.2125.59 Mobile/11D257 Safari/9537.53 (000816",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "38.0.2125.59"
        }) },
        { title : "iOS 7, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 " +
                "(KHTML, like Gecko) Mobile/11D257",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "7.1.2"
        }) },
        { title : "iOS 7, UC Browser+", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X; en-US) AppleWebKit/537.51.2 " +
                "(KHTML, like Gecko) Mobile/11D257 UCBrowser/9.3.0.326 Mobile",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "9.3.0.326"
        }) },
        { title : "iOS 7, UC Browser (International)", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X; en-US) AppleWebKit/537.51.1 " +
                "(KHTML, like Gecko) Mobile/11D257 UCBrowser/10.0.0.632 Mobile",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "10.0.0.632"
        }) },
        { title : "iOS 6, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 " +
                "(KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "6.1.3",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "6.1.3"
        }) },
        { title : "iOS 6, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 " +
                "(KHTML, like Gecko) CriOS/37.0.2062.52 Mobile/10B329 Safari/8536.25 (000936)",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "6.1.3",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.52"
        }) },
        { title : "iOS 6, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 " +
                "(KHTML, like Gecko) Mobile/10B329",
            screenWidth : 320,
            screenHeight : 568,
            family : [Detect.F.Iphone, "Detect.F.Iphone"],
            device : [Detect.D.Iphone5, "Detect.D.Iphone5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "6.1.3",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "6.1.3"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPad Pro 12.9' iOS 10");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 10, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/601.1 " +
                "(KHTML, like Gecko) CriOS/48.0.2564.87 Mobile/13C75 Safari/601.1.46",
            screenWidth : 1024,
            screenHeight : 1366,
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadPro129, "Detect.D.IpadPro129"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "10.0",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "48.0.2564.87"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPad Pro 12.9' iOS 9");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 9, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 " +
            "(KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1",
            screenWidth : 768,
            screenHeight : 1024,
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            //No way to distinguish iPad Pro 12.9' on iOS 9 from other iPads due to same screen.w x h
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.3.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "9.3.2"
        }) },
        { title : "iOS 9, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_2 like Mac OS X) AppleWebKit/601.1 " +
                "(KHTML, like Gecko) CriOS/48.0.2564.87 Mobile/13C75 Safari/601.1.46",
            screenWidth : 768,
            screenHeight : 1024,
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            //No way to distinguish iPad Pro 12.9' on iOS 9 from other iPads due to same screen.w x h
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "48.0.2564.87"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPad Air 2");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 9, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 " +
            "(KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.3.5",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "9.3.5"
        }) },
        { title : "iOS 9, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/13G36 Safari/601.1.46",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.3.5",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPad Air");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 7, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 " +
                "(KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "7.1.2"
        }) },
        { title : "iOS 7, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 " +
                "(KHTML, like Gecko) CriOS/37.0.2062.60 Mobile/11D257 Safari/9537.53 (000450)",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.60"
        }) },
        { title : "iOS 7, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 " +
                "(KHTML, like Gecko) Mobile/11D257",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "7.1.2"
        }) },
        { title : "iOS 7, UC Browser +", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; U; CPU OS 7_1 like Mac OS X; en-us; iPad4,1) AppleWebKit/534.46 " +
                "(KHTML, like Gecko) UCBrowser/2.4.0.367 U3/1 Safari/7543.48.3",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "7.1",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "2.4.0.367"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPad 4");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 8, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 " +
                "(KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "8.0.2",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "8.0.2"
        }) },
        { title : "iOS 8, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 " +
                "(KHTML, like Gecko) CriOS/38.0.2125.59 Mobile/12A405 Safari/600.1.4 (000296)",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "8.0.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "38.0.2125.59"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPad mini 2");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 9, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 " +
            "(KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.2.1",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "9.2.1"
        }) },
        { title : "iOS 9, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_2_1 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/13D15 Safari/601.1.46",
            devicePixelRatio : 2,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.IpadRetina, "Detect.D.IpadRetina"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.2.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("iPad mini");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "iOS 9, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 " +
            "(KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1",
            devicePixelRatio : 1,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.Ipad, "Detect.D.Ipad"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.2.1",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "9.2.1"
        }) },
        { title : "iOS 9, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (iPad; CPU OS 9_2_1 like Mac OS X) AppleWebKit/601.1 " +
            "(KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/13D15 Safari/601.1.46",
            devicePixelRatio : 1,
            family : [Detect.F.Ipad, "Detect.F.Ipad"],
            device : [Detect.D.Ipad, "Detect.D.Ipad"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Ios, "Detect.O.Ios"],
            osVersion : "9.2.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.109"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 10");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 10 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36",
            family : [Detect.F.NexusTablets, "Detect.F.NexusTablets"],
            device : [Detect.D.Nexus10, "Detect.D.Nexus10"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 10 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36",
            family : [Detect.F.NexusTablets, "Detect.F.NexusTablets"],
            device : [Detect.D.Nexus10, "Detect.D.Nexus10"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 7 (2013)");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36",
            family : [Detect.F.NexusTablets, "Detect.F.NexusTablets"],
            device : [Detect.D.Nexus7, "Detect.D.Nexus7"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36",
            family : [Detect.F.NexusTablets, "Detect.F.NexusTablets"],
            device : [Detect.D.Nexus7, "Detect.D.Nexus7"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 7 (2012)");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36",
            family : [Detect.F.NexusTablets, "Detect.F.NexusTablets"],
            device : [Detect.D.Nexus7, "Detect.D.Nexus7"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36",
            family : [Detect.F.NexusTablets, "Detect.F.NexusTablets"],
            device : [Detect.D.Nexus7, "Detect.D.Nexus7"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 6P");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 7, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 6P Build/NPD90G) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus6P, "Detect.D.Nexus6P"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 7, Opera", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 6P Build/NPD90G) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/50.0.2661.94 Mobile Safari/537.36 OPR/37.0.2192.105088",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus6P, "Detect.D.Nexus6P"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.Opera, "Detect.B.Opera"],
            browserVersion : "37.0.2192.105088"
        }) },
        { title : "Android 7, QQ Browser International", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 6P Build/NPD90G; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/1.1",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus6P, "Detect.D.Nexus6P"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "1.1"
        }) },
        { title : "Android 7, QQ Browser Chinese", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 6P Build/NPD90G; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/5.8",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus6P, "Detect.D.Nexus6P"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "5.8"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 6");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 5, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 5.0; Nexus 6 Build/LRX21O) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/49.0.2623.91 Mobile Safari/537.36",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus6, "Detect.D.Nexus6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "5.0",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "49.0.2623.91"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 5X");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 7, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/NPD90G) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus5X, "Detect.D.Nexus5X"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 7, Opera", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/NPD90G) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/50.0.2661.94 Mobile Safari/537.36 OPR/37.0.2192.105088",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus5X, "Detect.D.Nexus5X"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.Opera, "Detect.B.Opera"],
            browserVersion : "37.0.2192.105088"
        }) },
        { title : "Android 7, QQ Browser International", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/NPD90G; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/1.1",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus5X, "Detect.D.Nexus5X"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "1.1"
        }) },
        { title : "Android 7, QQ Browser Chinese", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/NPD90G; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/5.8",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus5X, "Detect.D.Nexus5X"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "7.0",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "5.8"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 5");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus5, "Detect.D.Nexus5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus5, "Detect.D.Nexus5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Nexus 4");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 4 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus4, "Detect.D.Nexus4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 4 Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.NexusSmartPhones, "Detect.F.NexusSmartPhones"],
            device : [Detect.D.Nexus4, "Detect.D.Nexus4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Lumia 925");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "WP 8.1, IE Mobile 11", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; " +
                "IEMobile/11.0; NOKIA; Lumia 925) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 " +
                "(KHTML, like Gecko) Mobile Safari/537",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia925, "Detect.D.Lumia925"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.1",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Lumia 920");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "WP 8.0, IE Mobile 10", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; " +
                "Touch; NOKIA; Lumia 920)",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia920, "Detect.D.Lumia920"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.0",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "10.0"
        }) },
        { title : "WP 8.0, IE Mobile 10 desktop mode", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.2",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "10.0"
        }) },
        { title : "WP 8.0, UCBrowser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; " +
                "Touch; NOKIA; Lumia 920) UCBrowser/4.2.1.541 Mobile",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia920, "Detect.D.Lumia920"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.0",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "4.2.1.541"
        }) },
        { title : "WP 8.1, IE Mobile 11 (before update)", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; " +
                "Lumia 920) like Gecko",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia920, "Detect.D.Lumia920"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.1",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) },
        { title : "WP 8.1, IE Mobile 11 (after update)", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; " +
                "IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) " +
                "Mobile Safari/537",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia920, "Detect.D.Lumia920"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.1",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) },
        { title : "WP 8.1, IE Mobile 11 desktop mode", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.2; ARM; Trident/7.0; Touch; rv:11.0; WPDesktop; Lumia 920) " +
                "like Gecko",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia920, "Detect.D.Lumia920"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.2",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) },
        { title : "WP 8.1, UCBrowser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; " +
                "IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) " +
                "Mobile Safari/537",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia920, "Detect.D.Lumia920"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.1",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Lumia 820");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "WP 8.0, IE Mobile 10", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; " +
                "Touch; NOKIA; Lumia 820)",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia820, "Detect.D.Lumia820"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.0",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "10.0"
        }) },
        { title : "WP 8.0, IE Mobile 10 desktop mode", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.2",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "10.0"
        }) },
        { title : "WP 8.0, UCBrowser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; " +
                "Touch; NOKIA; Lumia 820) UCBrowser/4.2.1.541 Mobile",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia820, "Detect.D.Lumia820"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.0",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "4.2.1.541"
        }) },
        { title : "WP 8.1, IE Mobile 11", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0;фTouch; rv:11.0; " +
                "IEMobile/11.0; NOKIA; Lumia 820) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) " +
                "Mobile Safari/537",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia820, "Detect.D.Lumia820"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.1",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) },
            { title : "WP 8.1, IE Mobile 11 desktop mode", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.2; ARM; Trident/7.0; Touch; rv:11.0; WPDesktop; Lumia 820) " +
                "like Gecko",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia820, "Detect.D.Lumia820"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.2",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) },
        { title : "WP 8.1, UCBrowser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; " +
                "IEMobile/11.0; NOKIA; Lumia 820) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) " +
                "Mobile Safari/537",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia820, "Detect.D.Lumia820"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.1",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Lumia 635");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "WP 8.1, IE Mobile 11", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; " +
                "Lumia 635) like Gecko",
            family : [Detect.F.Lumia, "Detect.F.Lumia"],
            device : [Detect.D.Lumia635, "Detect.D.Lumia635"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.WindowsPhone, "Detect.O.WindowsPhone"],
            osVersion : "8.1",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Tab S 10.5");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-T800 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/43.0.2357.93 Safari/537.36",
            family : [Detect.F.GalaxyTabS, "Detect.F.GalaxyTabS"],
            device : [Detect.D.GalaxyTabS10_5, "Detect.D.GalaxyTabS10_5"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "43.0.2357.93"
        }) },
        { title : "Android 4.4.2, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; uk-ua; SAMSUNG SM-T800 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Safari/537.36",
            family : [Detect.F.GalaxyTabS, "Detect.F.GalaxyTabS"],
            device : [Detect.D.GalaxyTabS10_5, "Detect.D.GalaxyTabS10_5"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "28.0.1500.94"
        }) },
        { title : "Android 4.4.2, UC Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.4.2; en-US; SM-T800 Build/KOT49H) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 UCBrowser/10.5.2.582 U3/0.8.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyTabS, "Detect.F.GalaxyTabS"],
            device : [Detect.D.GalaxyTabS10_5, "Detect.D.GalaxyTabS10_5"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "10.5.2.582"
        }) },
        { title : "Android 4.4.2, UC Browser HD", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-T800 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36 Mobile UCBrowser/3.4.3.532",
            family : [Detect.F.GalaxyTabS, "Detect.F.GalaxyTabS"],
            device : [Detect.D.GalaxyTabS10_5, "Detect.D.GalaxyTabS10_5"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "3.4.3.532"
        }) },
        { title : "Android 4.4.2, Firefox", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Android; Tablet; rv:39.0) Gecko/39.0 Firefox/39.0",
            family : [Detect.F.Unidentified, "Detect.F.Unidentified"],
            device : [Detect.D.Unidentified, "Detect.D.Unidentified"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : Detect.Consts.unidentified,
            browser : [Detect.B.Firefox, "Detect.B.Firefox"],
            browserVersion : "39.0"
        }) },
        { title : "Android 4.4.2, Yandex Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-T800 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/41.0.2272.118 YaBrowser/15.4.2272.3842.01 Safari/537.36",
            family : [Detect.F.GalaxyTabS, "Detect.F.GalaxyTabS"],
            device : [Detect.D.GalaxyTabS10_5, "Detect.D.GalaxyTabS10_5"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.YandexBrowser, "Detect.B.YandexBrowser"],
            browserVersion : "15.4.2272.3842.01"
        }) },
        { title : "Android 4.4.2, Opera", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-T800 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/43.0.2357.78 Safari/537.36 OPR/30.0.1856.93524",
            family : [Detect.F.GalaxyTabS, "Detect.F.GalaxyTabS"],
            device : [Detect.D.GalaxyTabS10_5, "Detect.D.GalaxyTabS10_5"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Opera, "Detect.B.Opera"],
            browserVersion : "30.0.1856.93524"
        }) },
        { title : "Android 4.4.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-T800 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36",
            family : [Detect.F.GalaxyTabS, "Detect.F.GalaxyTabS"],
            device : [Detect.D.GalaxyTabS10_5, "Detect.D.GalaxyTabS10_5"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Tab 4 10.1");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-T530 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/49.0.2623.91 Safari/537.36",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab4_10_1, "Detect.D.GalaxyTab4_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "49.0.2623.91"
        }) },
        { title : "Android 4.4.2, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; en-us; SAMSUNG SM-T530 Build/KOT49H) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Safari/537.36",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab4_10_1, "Detect.D.GalaxyTab4_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "28.0.1500.94"
        }) },
        { title : "Android 4.4.2, UC Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.4.2; en-US; SM-T530 Build/KOT49H) AppleWebKit/534.30 " +
            "(KHTML, like Gecko) Version/4.0 UCBrowser/11.0.5.850 U3/0.8.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab4_10_1, "Detect.D.GalaxyTab4_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "11.0.5.850"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Tab 3 10.1");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; GT-P5210 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab3_10_1, "Detect.D.GalaxyTab3_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.2, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.4.2; en-gb; GT-P5210 Build/KOT49H) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Safari/534.30",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab3_10_1, "Detect.D.GalaxyTab3_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.4.2"
        }) },
        { title : "Android 4.4.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; GT-P5210 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab3_10_1, "Detect.D.GalaxyTab3_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Tab 2 10.1");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.2.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.2.2; GT-P5100 Build/JDQ39) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab2_10_1, "Detect.D.GalaxyTab2_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.2.2, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; GT-P5100 Build/JDQ39) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Safari/534.30",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab2_10_1, "Detect.D.GalaxyTab2_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.2.2"
        }) },
        { title : "Android 4.2.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; GT-P5100 Build/JDQ39) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Safari/534.30",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab2_10_1, "Detect.D.GalaxyTab2_10_1"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.2.2"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Tab 3 7.0");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.1.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.1.2; SM-T210 Build/JZO54K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab3_7_0, "Detect.D.GalaxyTab3_7_0"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.1.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.1.2, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SM-T210 Build/JZO54K) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Safari/534.30",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab3_7_0, "Detect.D.GalaxyTab3_7_0"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.1.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.1.2"
        }) },
        { title : "Android 4.1.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SM-T210 Build/JZO54K) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Safari/534.30",
            family : [Detect.F.GalaxyTab, "Detect.F.GalaxyTab"],
            device : [Detect.D.GalaxyTab3_7_0, "Detect.D.GalaxyTab3_7_0"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.1.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.1.2"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Note 4");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; SM-N910C Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/49.0.2623.91 Mobile Safari/537.36",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote4, "Detect.D.GalaxyNote4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "49.0.2623.91"
        }) },
        { title : "Android 6.0.1, Samsung Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-N910H Build/MMB29K) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote4, "Detect.D.GalaxyNote4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.SamsungBrowser, "Detect.B.SamsungBrowser"],
            browserVersion : "4.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Note 3");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-N900 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote3, "Detect.D.GalaxyNote3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.2, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; en-gb; SAMSUNG SM-N900 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote3, "Detect.D.GalaxyNote3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "28.0.1500.94"
        }) },
        { title : "Android 4.4.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-N900 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote3, "Detect.D.GalaxyNote3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy Note 2");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; GT-N7100 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote2, "Detect.D.GalaxyNote2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.2, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; GT-N7100 Build/KOT49H) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote2, "Detect.D.GalaxyNote2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.4.2"
        }) },
        { title : "Android 4.4.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; GT-N7100 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.GalaxyNote, "Detect.F.GalaxyNote"],
            device : [Detect.D.GalaxyNote2, "Detect.D.GalaxyNote2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S7");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 6.0.1, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 6.0.1, Samsung Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-G930F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.SamsungBrowser, "Detect.B.SamsungBrowser"],
            browserVersion : "4.0"
        }) },
        { title : "Android 6.0.1, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.AndroidWebView, "Detect.B.AndroidWebView"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 6.0.1, Firefox", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Android 6.0.1; Mobile; rv:48.0) Gecko/48.0 Firefox/48.0",
            family : [Detect.F.Unidentified, "Detect.F.Unidentified"],
            device : [Detect.D.Unidentified, "Detect.D.Unidentified"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Firefox, "Detect.B.Firefox"],
            browserVersion : "48.0"
        }) },
        { title : "Android 6.0.1, Opera", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/50.0.2661.94 Mobile Safari/537.36 OPR/37.0.2192.105088",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Opera, "Detect.B.Opera"],
            browserVersion : "37.0.2192.105088"
        }) },
        { title : "Android 6.0.1, UC Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 6.0.1; en-US; SM-G930F Build/MMB29K) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 UCBrowser/11.0.0.828 U3/0.8.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "11.0.0.828"
        }) },
        { title : "Android 6.0.1, QQ Browser International", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/1.1",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "1.1"
        }) },
        { title : "Android 6.0.1, QQ Browser Chinese", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/5.8",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "5.8"
        }) },
        { title : "Android 6.0.1, Baidu Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/35.0.1916.138 Mobile Safari/537.36 T7/7.4 " +
                "baidubrowser/ 7.4.14.0 (Baidu; P1 6.0.1)",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.BaiduBrowser, "Detect.B.BaiduBrowser"],
            browserVersion : "7.4.14.0"
        }) },
        { title : "Android 6.0.1, DU Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 bdbrowser/ 6.4.0.4",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.DUBrowser, "Detect.B.DUBrowser"],
            browserVersion : "6.4.0.4"
        }) },
        { title : "Android 6.0.1, DU Browser for Tablet", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 bdbrowser/ 1.9.0.2",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.DUBrowser, "Detect.B.DUBrowser"],
            browserVersion : "1.9.0.2"
        }) },
        { title : "Android 6.0.1, 360 Security Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G930F Build/MMB29K; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36; 360 Aphone Browser (6.9.9.50)",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS7, "Detect.D.GalaxyS7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B._360Browser, "Detect.B._360Browser"],
            browserVersion : "6.9.9.50"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S6 Edge");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 6.0.1, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G925F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS6Edge, "Detect.D.GalaxyS6Edge"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 6.0.1, Samsung Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-G925F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS6Edge, "Detect.D.GalaxyS6Edge"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.SamsungBrowser, "Detect.B.SamsungBrowser"],
            browserVersion : "4.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S6");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 6.0.1, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G920F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS6, "Detect.D.GalaxyS6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 6.0.1, Samsung Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-G920F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS6, "Detect.D.GalaxyS6"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.SamsungBrowser, "Detect.B.SamsungBrowser"],
            browserVersion : "4.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S5");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 6.0.1, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-G900H Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS5, "Detect.D.GalaxyS5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-G900H Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS5, "Detect.D.GalaxyS5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.2, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; ru-ru; SAMSUNG SM-G900H Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/1.6 Chrome/28.0.1500.94 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS5, "Detect.D.GalaxyS5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "28.0.1500.94"
        }) },
        { title : "Android 4.4.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; SM-G900H Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS5, "Detect.D.GalaxyS5"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S4 LTE");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.2.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.22 " +
                "(KHTML, like Gecko) Chrome/25.0.1364.169 Mobile Safari/537.22",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "25.0.1364.169"
        }) },
        { title : "Android 4.2.2, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.2.2; en-gb; SAMSUNG GT-I9505 Build/JDQ39) AppleWebKit/535.19 " +
                "(KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "18.0.1025.308"
        }) },
        { title : "Android 4.2.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.2.2"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S4");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; GT-I9500 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/36.0.1985.135 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "36.0.1985.135"
        }) },
        { title : "Android 4.4.2, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; en-us; SAMSUNG GT-I9500 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "28.0.1500.94"
        }) },
        { title : "Android 4.4.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; GT-I9500 Build/KOT49H) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.0.0"
        }) },
        { title : "Android 5.0.1, UC Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 5.0.1; en-US; GT-I9500 Build/LRX22C) AppleWebKit/534.30 " +
            "(KHTML, like Gecko) Version/4.0 UCBrowser/10.10.5.809 U3/0.8.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "5.0.1",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "10.10.5.809"
        }) },
        { title : "Android 5.0.1, UC Browser CN", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 5.0.1; en-US; GT-I9500 Build/LRX22C) AppleWebKit/534.30 " +
            "(KHTML, like Gecko) Version/4.0 UCBrowser/10.10.5.809 U3/0.8.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS4, "Detect.D.GalaxyS4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "5.0.1",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "10.10.5.809"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S3");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.3, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS3, "Detect.D.GalaxyS3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.3",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.3, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.3; en-gb; GT-I9300 Build/JSS15J) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS3, "Detect.D.GalaxyS3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.3",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.3"
        }) },
        { title : "Android 4.3, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.3; en-gb; GT-I9300 Build/JSS15J) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS3, "Detect.D.GalaxyS3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.3",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.3"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy S2");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.1.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.1.2; GT-I9100 Build/JZO54K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS2, "Detect.D.GalaxyS2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.1.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.1.2, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; GT-I9100 Build/JZO54K) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS2, "Detect.D.GalaxyS2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.1.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.1.2"
        }) },
        { title : "Android 4.1.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; GT-I9100 Build/JZO54K) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.GalaxyS, "Detect.F.GalaxyS"],
            device : [Detect.D.GalaxyS2, "Detect.D.GalaxyS2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.1.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.1.2"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Galaxy A7");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 6.0.1, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SM-A710F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.GalaxyA, "Detect.F.GalaxyA"],
            device : [Detect.D.GalaxyA7, "Detect.D.GalaxyA7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 6.0.1, Samsung Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A710F Build/MMB29K) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
            family : [Detect.F.GalaxyA, "Detect.F.GalaxyA"],
            device : [Detect.D.GalaxyA7, "Detect.D.GalaxyA7"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.SamsungBrowser, "Detect.B.SamsungBrowser"],
            browserVersion : "4.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("HTC One");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.3, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.3; HTC One Build/KTU84L) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.HtcOne, "Detect.F.HtcOne"],
            device : [Detect.D.HtcOne, "Detect.D.HtcOne"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.3",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.3, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.4.3; en-ua; HTC_One Build/KTU84L) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.HtcOne, "Detect.F.HtcOne"],
            device : [Detect.D.HtcOne, "Detect.D.HtcOne"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.3",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.4.3"
        }) },
        { title : "Android 4.4.3, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.3; HTC One Build/KTU84L) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.HtcOne, "Detect.F.HtcOne"],
            device : [Detect.D.HtcOne, "Detect.D.HtcOne"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.3",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Sony Xperia Z");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; C6602 Build/10.5.1.A.0.283) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.XperiaZ, "Detect.F.XperiaZ"],
            device : [Detect.D.XperiaZ, "Detect.D.XperiaZ"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.4, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; C6602 Build/10.5.1.A.0.283) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.XperiaZ, "Detect.F.XperiaZ"],
            device : [Detect.D.XperiaZ, "Detect.D.XperiaZ"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Motorola Moto G (2nd gen)");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 5.0.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 5.0.2; XT1068 Build/LXB22.46-28) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/49.0.2623.91 Mobile Safari/537.36",
            family : [Detect.F.MotorolaMotoG, "Detect.F.MotorolaMotoG"],
            device : [Detect.D.MotorolaMotoG2, "Detect.D.MotorolaMotoG2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "5.0.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "49.0.2623.91"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Motorola Moto G");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; XT1032 Build/KXB21.14-L1.50) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.MotorolaMotoG, "Detect.F.MotorolaMotoG"],
            device : [Detect.D.MotorolaMotoG, "Detect.D.MotorolaMotoG"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.4, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; XT1032 Build/KXB21.14-L1.50) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.MotorolaMotoG, "Detect.F.MotorolaMotoG"],
            device : [Detect.D.MotorolaMotoG, "Detect.D.MotorolaMotoG"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "33.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("LG G4");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 6.0, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0; LG-H818 Build/MRA58K) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.LGG, "Detect.F.LGG"],
            device : [Detect.D.LGG4, "Detect.D.LGG4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 6.0, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 6.0; LG-H818 Build/MRA58K) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Mobile Safari/537.36",
            family : [Detect.F.LGG, "Detect.F.LGG"],
            device : [Detect.D.LGG4, "Detect.D.LGG4"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "38.0.2125.102"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("LG G3");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 5.0, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 5.0; LG-D855 Build/LRX21R.A1447064049) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/53.0.2785.124 Mobile Safari/537.36",
            family : [Detect.F.LGG, "Detect.F.LGG"],
            device : [Detect.D.LGG3, "Detect.D.LGG3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "5.0",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.124"
        }) },
        { title : "Android 5.0, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 5.0; en-us; LG-D855 Build/LRX21R.A1447064049) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Mobile Safari/537.36",
            family : [Detect.F.LGG, "Detect.F.LGG"],
            device : [Detect.D.LGG3, "Detect.D.LGG3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "5.0",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "34.0.1847.118"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("LG G2");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; LG-D802 Build/KOT49I.D80220b) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36",
            family : [Detect.F.LGG, "Detect.F.LGG"],
            device : [Detect.D.LGG2, "Detect.D.LGG2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "37.0.2062.117"
        }) },
        { title : "Android 4.4.2, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.4.2; en-gb; LG-D802 Build/KOT49I.D80220b) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.1599.103 Mobile Safari/537.36",
            family : [Detect.F.LGG, "Detect.F.LGG"],
            device : [Detect.D.LGG2, "Detect.D.LGG2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.1599.103"
        }) },
        { title : "Android 4.4.2, Native WebView", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.2; LG-D802 Build/KOT49I.D80220b) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            family : [Detect.F.LGG, "Detect.F.LGG"],
            device : [Detect.D.LGG2, "Detect.D.LGG2"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.2",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "30.0.0.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Meizu MX4 Pro");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; MX4 Pro Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36",
            family : [Detect.F.MeizuMX, "Detect.F.MeizuMX"],
            device : [Detect.D.MeizuMX4Pro, "Detect.D.MeizuMX4Pro"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "43.0.2357.93"
        }) },
        { title : "Android 4.4.4, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.4.4; ru-ru; MX4 Pro Build/KTU84P) AppleWebKit/534.30 " +
                "(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            family : [Detect.F.MeizuMX, "Detect.F.MeizuMX"],
            device : [Detect.D.MeizuMX4Pro, "Detect.D.MeizuMX4Pro"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.4.4"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Xiaomi Mi4");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.4.4, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; MI 4W Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/44.0.2403.133 Mobile Safari/537.36",
            family : [Detect.F.XiaomiMi, "Detect.F.XiaomiMi"],
            device : [Detect.D.XiaomiMi4W, "Detect.D.XiaomiMi4W"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "44.0.2403.133"
        }) },
        { title : "Android 4.4.4, Baidu Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.4.4; MI 4LTE Build/KTU84P) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 bdbrowser_i18n/4.5.0.4",
            family : [Detect.F.XiaomiMi, "Detect.F.XiaomiMi"],
            device : [Detect.D.XiaomiMi4LTE, "Detect.D.XiaomiMi4LTE"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.4.4",
            browser : [Detect.B.BaiduBrowser, "Detect.B.BaiduBrowser"],
            browserVersion : "4.5.0.4"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Xiaomi Mi3");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 6.0.1, Chrome", mockObject : new MockObject({
            userAgent : "Xiaomi mi 3w Mozilla/5.0 (Linux; Android 6.0.1; MI 3W Build/MMB29M) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36",
            family : [Detect.F.XiaomiMi, "Detect.F.XiaomiMi"],
            device : [Detect.D.XiaomiMi3, "Detect.D.XiaomiMi3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "52.0.2743.98"
        }) },
        { title : "Android 6.0.1, Android Browser Chromium", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 6.0.1; en-us; MI 3W Build/MMB29M) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.85 Mobile Safari/537.36 XiaoMi/MiuiBrowser/2.1.1",
            family : [Detect.F.XiaomiMi, "Detect.F.XiaomiMi"],
            device : [Detect.D.XiaomiMi3, "Detect.D.XiaomiMi3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.AndroidWebkitChrome, "Detect.B.AndroidWebkitChrome"],
            browserVersion : "46.0.2490.85"
        }) },
        { title : "Android 6.0.1, Firefox", mockObject : new MockObject({
            userAgent : "Xiaomi mi 3w Mozilla/5.0 (Android 6.0.1; Mobile; rv:48.0) Gecko/48.0 Firefox/48.0",
            family : [Detect.F.Unidentified, "Detect.F.Unidentified"],
            device : [Detect.D.Unidentified, "Detect.D.Unidentified"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Firefox, "Detect.B.Firefox"],
            browserVersion : "48.0"
        }) },
        { title : "Android 6.0.1, Opera", mockObject : new MockObject({
            userAgent : "Xiaomi mi3 Mozilla/5.0 (Linux; Android 6.0.1; MI 3W Build/MMB29M) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/50.0.2661.94 Mobile Safari/537.36 OPR/37.0.2192.105088",
            family : [Detect.F.XiaomiMi, "Detect.F.XiaomiMi"],
            device : [Detect.D.XiaomiMi3, "Detect.D.XiaomiMi3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.Opera, "Detect.B.Opera"],
            browserVersion : "37.0.2192.105088"
        }) },
        { title : "Android 6.0.1, QQ Browser International", mockObject : new MockObject({
            userAgent : "Xiaomi mi3w Mozilla/5.0 (Linux; Android 6.0.1; MI 3W Build/MMB29M; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/1.1",
            family : [Detect.F.XiaomiMi, "Detect.F.XiaomiMi"],
            device : [Detect.D.XiaomiMi3, "Detect.D.XiaomiMi3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "1.1"
        }) },
        { title : "Android 6.0.1, QQ Browser Chinese", mockObject : new MockObject({
            userAgent : "Xiaomi mi3w qq cn Mozilla/5.0 (Linux; Android 6.0.1; MI 3W Build/MMB29M; wv) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 MQQBrowser/5.8",
            family : [Detect.F.XiaomiMi, "Detect.F.XiaomiMi"],
            device : [Detect.D.XiaomiMi3, "Detect.D.XiaomiMi3"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "6.0.1",
            browser : [Detect.B.QQBrowser, "Detect.B.QQBrowser"],
            browserVersion : "5.8"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Lenovo Tab 2 A7-30");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 5.0.1, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 5.0.1; Lenovo TAB 2 A7-30HC Build/LRX21M) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/53.0.2785.124 Safari/537.36",
            family : [Detect.F.LenovoTab, "Detect.F.LenovoTab"],
            device : [Detect.D.LenovoTab2A730HC, "Detect.D.LenovoTab2A730HC"],
            isSmartPhone : false,
            isTablet : true,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "5.0.1",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.124"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Lenovo A850");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.2.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.2.2; A850 Build/JDQ39) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/53.0.2785.124 Mobile Safari/537.36",
            family : [Detect.F.LenovoA, "Detect.F.LenovoA"],
            device : [Detect.D.LenovoA850, "Detect.D.LenovoA850"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "53.0.2785.124"
        }) },
        { title : "Android 4.2.2, Android Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; Lenovo A850/S105) AppleWebKit/534.30 " +
            "(KHTML, like Gecko) Version/4.2.2 Mobile Safari/534.30",
            family : [Detect.F.LenovoA, "Detect.F.LenovoA"],
            device : [Detect.D.LenovoA850, "Detect.D.LenovoA850"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.2.2"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Lenovo A889");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Android 4.2.2, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Linux; Android 4.2.2; Lenovo A889 Build/JDQ39) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/47.0.2526.76 Mobile Safari/537.36",
            family : [Detect.F.LenovoA, "Detect.F.LenovoA"],
            device : [Detect.D.LenovoA889, "Detect.D.LenovoA889"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2.2",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "47.0.2526.76"
        }) },
        { title : "Android 4.2.2, Android Browser", mockObject : new MockObject({
            userAgent : "Lenovo-A889/S100 Linux/3.4.5 Android/4.2 Release/08.07.2013 " +
            "Browser/AppleWebKit 534.30 Profile/ Configuration;",
            family : [Detect.F.LenovoA, "Detect.F.LenovoA"],
            device : [Detect.D.LenovoA889, "Detect.D.LenovoA889"],
            isSmartPhone : true,
            isTablet : false,
            isUnidentified : false,
            isDesktop : false,
            os : [Detect.O.Android, "Detect.O.Android"],
            osVersion : "4.2",
            browser : [Detect.B.AndroidWebkit, "Detect.B.AndroidWebkit"],
            browserVersion : "4.2"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

//**********************************************************************************************************************
QUnit.module("Desktop");
//**********************************************************************************************************************

QUnit
    .cases([
        { title : "Mac OS X, Safari", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.6.3 " +
                "(KHTML, like Gecko) Version/8.0.6 Safari/600.6.3",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.MacOS, "Detect.O.MacOS"],
            osVersion : "10.10.3",
            browser : [Detect.B.Safari, "Detect.B.Safari"],
            browserVersion : "8.0.6"
        }) },
        { title : "Linux Mint 17, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Unix, "Detect.O.Unix"],
            osVersion : Detect.Consts.unidentified,
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "44.0.2403.89"
        }) },
        { title : "Linux Mint 17, Firefox", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Unix, "Detect.O.Unix"],
            osVersion : Detect.Consts.unidentified,
            browser : [Detect.B.Firefox, "Detect.B.Firefox"],
            browserVersion : "39.0"
        }) },
        { title : "Linux Mint 17, Opera", mockObject : new MockObject({
            userAgent : "Opera/9.80 (X11; Linux x86_64; Edition Linux Mint) Presto/2.12.388 Version/12.16",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Unix, "Detect.O.Unix"],
            osVersion : Detect.Consts.unidentified,
            browser : [Detect.B.Opera, "Detect.B.Opera"],
            browserVersion : "9.80"
        }) },
        { title : "Windows 8.1, Chrome", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/44.0.2403.155",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.3",
            browser : [Detect.B.Chrome, "Detect.B.Chrome"],
            browserVersion : "44.0.2403.155"
        }) },
        { title : "Windows 8.1, Firefox", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.3",
            browser : [Detect.B.Firefox, "Detect.B.Firefox"],
            browserVersion : "39.0"
        }) },
        { title : "Windows 8.1, Internet Explorer", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; InfoPath.3; " +
                ".NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; rv:11.0) like Gecko",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.3",
            browser : [Detect.B.Ie, "Detect.B.Ie"],
            browserVersion : "11.0"
        }) },
        { title : "Windows 8.1, UC Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                "Chrome/41.0.2272.118 UBrowser/5.2.3635.1033 Safari/537.36",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.3",
            browser : [Detect.B.UcBrowser, "Detect.B.UcBrowser"],
            browserVersion : "5.2.3635.1033"
        }) },
        { title : "Windows 8.1, Opera", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                "Chrome/44.0.2403.107 Safari/537.36 OPR/31.0.1889.99",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.3",
            browser : [Detect.B.Opera, "Detect.B.Opera"],
            browserVersion : "31.0.1889.99"
        }) },
        { title : "Windows 8.1, Maxthon", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                "Maxthon/4.4.7.1000 Chrome/30.0.1599.101 Safari/537.36",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.3",
            browser : [Detect.B.Maxthon, "Detect.B.Maxthon"],
            browserVersion : "4.4.7.1000"
        }) },
        { title : "Windows 8.1, Yandex Browser", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                "Chrome/43.0.2357.124 YaBrowser/15.7.2357.2700 Safari/537.36",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "6.3",
            browser : [Detect.B.YandexBrowser, "Detect.B.YandexBrowser"],
            browserVersion : "15.7.2357.2700"
        }) },
        { title : "Windows 10, Edge", mockObject : new MockObject({
            userAgent : "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                "Chrome/39.0.2171.71 Safari/537.36 Edge/12.0",
            family : [Detect.F.UnidentifiedDesktop, "Detect.F.UnidentifiedDesktop"],
            device : [Detect.D.UnidentifiedDesktop, "Detect.D.UnidentifiedDesktop"],
            isSmartPhone : false,
            isTablet : false,
            isUnidentified : false,
            isDesktop : true,
            os : [Detect.O.Windows, "Detect.O.Windows"],
            osVersion : "10.0",
            browser : [Detect.B.Edge, "Detect.B.Edge"],
            browserVersion : "12.0"
        }) }
    ])
    .test("", function(params, assert) {
        mainTest(params.mockObject, assert);
    });

function MockObject(mockObject) {
    this.userAgent = mockObject.userAgent != undefined ? mockObject.userAgent : "No user-agent provided";
    this.screenWidth = mockObject.screenWidth != undefined ? mockObject.screenWidth : screen.width;
    this.screenHeight = mockObject.screenHeight != undefined ? mockObject.screenHeight : screen.height;
    this.devicePixelRatio = mockObject.devicePixelRatio != undefined ? mockObject.devicePixelRatio : window.devicePixelRatio;
    this.family = mockObject.family;
    this.device = mockObject.device;
    this.isSmartPhone = mockObject.isSmartPhone;
    this.isTablet = mockObject.isTablet;
    this.isUnidentified = mockObject.isUnidentified;
    this.isDesktop = mockObject.isDesktop;
    this.os = mockObject.os;
    this.osVersion = mockObject.osVersion;
    this.browser = mockObject.browser;
    this.browserVersion = mockObject.browserVersion;
}

MockObject.prototype.toString = function() {
    return "{{Mock object: " + JSON.stringify(this, null, '  ') + " }}";
};