package com.playtech.ngm.detect.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper over Detect.js:
 * <a href="http://dev-ngm.playtechgaming.com/detect/">http://dev-ngm.playtechgaming.com/detect/</a>
 *
 * It expects that Detect.init() called in JS somewhere before.
 * ATM we have the need to initialize Detect.js inside index.html long before GWT on module load.
 */
public final class Detect extends JavaScriptObject {
    protected Detect() {}

    public static class Entity extends JavaScriptObject {
        protected Entity() {}

        public final native String name()/*-{
            return this.name;
        }-*/;
    }

    public final static class TypeEntity extends Entity {
        protected TypeEntity() {}
    }

    public final static class FamilyEntity extends Entity {
        protected FamilyEntity() {}

        public final native TypeEntity type()/*-{
            return this.type;
        }-*/;
    }

    public final static class DeviceEntity extends Entity {
        protected DeviceEntity() {}

        public final native FamilyEntity family()/*-{
            return this.family;
        }-*/;
    }

    public final static class OSEntity extends Entity {
        protected OSEntity() {}
    }

    public final static class BrowserEntity extends Entity {
        protected BrowserEntity() {}
    }

    public static class EntityManipulator extends JavaScriptObject {
        protected EntityManipulator() {}

        public final native String commercialName()/*-{
            return this.commercialName();
        }-*/;

        public final native boolean is(Entity entity)/*-{
            return this.is(entity);
        }-*/;

        public final native boolean isAnyOf(Entity... entities)/*-{
            return this.isAnyOf.apply(null, entities);
        }-*/;
    }

    public static class EntityManipulatorWithVersioning extends EntityManipulator {
        protected EntityManipulatorWithVersioning() {}

        public final native String version()/*-{
            return this.version();
        }-*/;

        public final native boolean versionIs(String version)/*-{
            return this.versionIs(version);
        }-*/;

        public final native boolean versionIsExactly(String version)/*-{
            return this.versionIsExactly(version);
        }-*/;

        public final native boolean versionIsLaterThan(String version)/*-{
            return this.versionIsLaterThan(version);
        }-*/;

        public final native boolean versionIsEarlierThan(String version)/*-{
            return this.versionIsEarlierThan(version);
        }-*/;
    }

    public final static class Type extends EntityManipulator {
        protected Type() {}
    }

    public final static class Family extends EntityManipulator {
        protected Family() {}
    }

    public final static class Device extends EntityManipulator {
        protected Device() {}
    }

    public final static class OS extends EntityManipulatorWithVersioning {
        protected OS() {}
    }

    public final static class Browser extends EntityManipulatorWithVersioning {
        protected Browser() {}
    }

    public final native T T()/*-{
        return this.T;
    }-*/;

    public final native Type Type()/*-{
        return this.Type;
    }-*/;

    public final static class T extends JavaScriptObject {
        protected T() {}
        public final native TypeEntity Unidentified()/*-{return this.Unidentified;}-*/;
        public final native TypeEntity SmartPhone()/*-{return this.SmartPhone;}-*/;
        public final native TypeEntity Tablet()/*-{return this.Tablet;}-*/;
        public final native TypeEntity Desktop()/*-{return this.Desktop;}-*/;
    }

    public final native F F()/*-{
        return this.F;
    }-*/;

    public final native Family Family()/*-{
        return this.Family;
    }-*/;

    public final static class F extends JavaScriptObject {
        protected F() {}
        public final native FamilyEntity Unidentified()/*-{return this.Unidentified;}-*/;
        public final native FamilyEntity Iphone()/*-{return this.Iphone;}-*/;
        public final native FamilyEntity Ipad()/*-{return this.Ipad;}-*/;
        public final native FamilyEntity Ipod()/*-{return this.Ipod;}-*/;
        public final native FamilyEntity NexusSmartPhones()/*-{return this.NexusSmartPhones;}-*/;
        public final native FamilyEntity NexusTablets()/*-{return this.NexusTablets;}-*/;
        public final native FamilyEntity GalaxyA()/*-{return this.GalaxyA;}-*/;
        public final native FamilyEntity GalaxyS()/*-{return this.GalaxyS;}-*/;
        public final native FamilyEntity GalaxyNote()/*-{return this.GalaxyNote;}-*/;
        public final native FamilyEntity GalaxyTab()/*-{return this.GalaxyTab;}-*/;
        public final native FamilyEntity GalaxyTabS()/*-{return this.GalaxyTabS;}-*/;
        public final native FamilyEntity HtcOne()/*-{return this.HtcOne;}-*/;
        public final native FamilyEntity XperiaZ()/*-{return this.XperiaZ;}-*/;
        public final native FamilyEntity MotorolaMotoG()/*-{return this.MotorolaMotoG;}-*/;
        public final native FamilyEntity LGG()/*-{return this.LGG;}-*/;
        public final native FamilyEntity MeizuMX()/*-{return this.MeizuMX;}-*/;
        public final native FamilyEntity XiaomiMi()/*-{return this.XiaomiMi;}-*/;
        public final native FamilyEntity LenovoTab()/*-{return this.LenovoTab;}-*/;
        public final native FamilyEntity LenovoA()/*-{return this.LenovoA;}-*/;
        public final native FamilyEntity Lumia()/*-{return this.Lumia;}-*/;
        public final native FamilyEntity UnidentifiedDesktop()/*-{return this.UnidentifiedDesktop;}-*/;
    }

    public final native D D()/*-{
        return this.D;
    }-*/;

    public final native Device Device()/*-{
        return this.Device;
    }-*/;

    public final static class D extends JavaScriptObject {
        protected D() {}
        public final native DeviceEntity Unidentified()/*-{return this.Unidentified;}-*/;
        public final native DeviceEntity Iphone6Plus()/*-{return this.Iphone6Plus;}-*/;
        public final native DeviceEntity Iphone6()/*-{return this.Iphone6;}-*/;
        public final native DeviceEntity Iphone5()/*-{return this.Iphone5;}-*/;
        public final native DeviceEntity Iphone4()/*-{return this.Iphone4;}-*/;
        public final native DeviceEntity Ipod()/*-{return this.Ipod;}-*/;
        public final native DeviceEntity IpadPro129()/*-{return this.IpadPro129;}-*/;
        public final native DeviceEntity IpadRetina()/*-{return this.IpadRetina;}-*/;
        public final native DeviceEntity Ipad()/*-{return this.Ipad;}-*/;
        public final native DeviceEntity Nexus6P()/*-{return this.Nexus6P;}-*/;
        public final native DeviceEntity Nexus5X()/*-{return this.Nexus5X;}-*/;
        public final native DeviceEntity Nexus6()/*-{return this.Nexus6;}-*/;
        public final native DeviceEntity Nexus5()/*-{return this.Nexus5;}-*/;
        public final native DeviceEntity Nexus4()/*-{return this.Nexus4;}-*/;
        public final native DeviceEntity GalaxyNexus()/*-{return this.GalaxyNexus;}-*/;
        public final native DeviceEntity NexusS()/*-{return this.NexusS;}-*/;
        public final native DeviceEntity NexusOne()/*-{return this.NexusOne;}-*/;
        public final native DeviceEntity Nexus9()/*-{return this.Nexus9;}-*/;
        public final native DeviceEntity Nexus10()/*-{return this.Nexus10;}-*/;
        public final native DeviceEntity Nexus7()/*-{return this.Nexus7;}-*/;
        public final native DeviceEntity GalaxyTabS2_9_7()/*-{return this.GalaxyTabS2_9_7;}-*/;
        public final native DeviceEntity GalaxyTabS2_8_0()/*-{return this.GalaxyTabS2_8_0;}-*/;
        public final native DeviceEntity GalaxyTabS10_5()/*-{return this.GalaxyTabS10_5;}-*/;
        public final native DeviceEntity GalaxyTabS8_4()/*-{return this.GalaxyTabS8_4;}-*/;
        public final native DeviceEntity GalaxyTabA9_7()/*-{return this.GalaxyTabA9_7;}-*/;
        public final native DeviceEntity GalaxyTabA8_0()/*-{return this.GalaxyTabA8_0;}-*/;
        public final native DeviceEntity GalaxyTabPro12_2()/*-{return this.GalaxyTabPro12_2;}-*/;
        public final native DeviceEntity GalaxyTabPro10_1()/*-{return this.GalaxyTabPro10_1;}-*/;
        public final native DeviceEntity GalaxyTabPro8_4()/*-{return this.GalaxyTabPro8_4;}-*/;
        public final native DeviceEntity GalaxyTab4_10_1_2015()/*-{return this.GalaxyTab4_10_1_2015;}-*/;
        public final native DeviceEntity GalaxyTab4_10_1_LTE()/*-{return this.GalaxyTab4_10_1_LTE;}-*/;
        public final native DeviceEntity GalaxyTab4_10_1_3G()/*-{return this.GalaxyTab4_10_1_3G;}-*/;
        public final native DeviceEntity GalaxyTab4_10_1()/*-{return this.GalaxyTab4_10_1;}-*/;
        public final native DeviceEntity GalaxyTab4_8_0()/*-{return this.GalaxyTab4_8_0;}-*/;
        public final native DeviceEntity GalaxyTab4_7_0()/*-{return this.GalaxyTab4_7_0;}-*/;
        public final native DeviceEntity GalaxyTab3_10_1()/*-{return this.GalaxyTab3_10_1;}-*/;
        public final native DeviceEntity GalaxyTab3_8_0()/*-{return this.GalaxyTab3_8_0;}-*/;
        public final native DeviceEntity GalaxyTab3_7_0()/*-{return this.GalaxyTab3_7_0;}-*/;
        public final native DeviceEntity GalaxyTab2_10_1()/*-{return this.GalaxyTab2_10_1;}-*/;
        public final native DeviceEntity GalaxyTab2_7_0()/*-{return this.GalaxyTab2_7_0;}-*/;
        public final native DeviceEntity GalaxyTab10_1()/*-{return this.GalaxyTab10_1;}-*/;
        public final native DeviceEntity GalaxyTab8_9()/*-{return this.GalaxyTab8_9;}-*/;
        public final native DeviceEntity GalaxyTab7_7()/*-{return this.GalaxyTab7_7;}-*/;
        public final native DeviceEntity GalaxyTab7_0()/*-{return this.GalaxyTab7_0;}-*/;
        public final native DeviceEntity GalaxyS7Edge()/*-{return this.GalaxyS7Edge;}-*/;
        public final native DeviceEntity GalaxyS7()/*-{return this.GalaxyS7;}-*/;
        public final native DeviceEntity GalaxyS6EdgePlus()/*-{return this.GalaxyS6EdgePlus;}-*/;
        public final native DeviceEntity GalaxyS6Edge()/*-{return this.GalaxyS6Edge;}-*/;
        public final native DeviceEntity GalaxyS6()/*-{return this.GalaxyS6;}-*/;
        public final native DeviceEntity GalaxyS5LTE()/*-{return this.GalaxyS5LTE;}-*/;
        public final native DeviceEntity GalaxyS5Mini()/*-{return this.GalaxyS5Mini;}-*/;
        public final native DeviceEntity GalaxyS5()/*-{return this.GalaxyS5;}-*/;
        public final native DeviceEntity GalaxyS4Mini()/*-{return this.GalaxyS4Mini;}-*/;
        public final native DeviceEntity GalaxyS4Zoom()/*-{return this.GalaxyS4Zoom;}-*/;
        public final native DeviceEntity GalaxyS4()/*-{return this.GalaxyS4;}-*/;
        public final native DeviceEntity GalaxyS3Slim()/*-{return this.GalaxyS3Slim;}-*/;
        public final native DeviceEntity GalaxyS3Mini()/*-{return this.GalaxyS3Mini;}-*/;
        public final native DeviceEntity GalaxyS3()/*-{return this.GalaxyS3;}-*/;
        public final native DeviceEntity GalaxyS2LTE()/*-{return this.GalaxyS2LTE;}-*/;
        public final native DeviceEntity GalaxyS2()/*-{return this.GalaxyS2;}-*/;
        public final native DeviceEntity GalaxyS()/*-{return this.GalaxyS;}-*/;
        public final native DeviceEntity GalaxyA7()/*-{return this.GalaxyA7;}-*/;
        public final native DeviceEntity GalaxyNotePro12_2()/*-{return this.GalaxyNotePro12_2;}-*/;
        public final native DeviceEntity GalaxyNote10_1_2014()/*-{return this.GalaxyNote10_1_2014;}-*/;
        public final native DeviceEntity GalaxyNote10_1()/*-{return this.GalaxyNote10_1;}-*/;
        public final native DeviceEntity GalaxyNoteEdge()/*-{return this.GalaxyNoteEdge;}-*/;
        public final native DeviceEntity GalaxyNote5()/*-{return this.GalaxyNote5;}-*/;
        public final native DeviceEntity GalaxyNote4Duos()/*-{return this.GalaxyNote4Duos;}-*/;
        public final native DeviceEntity GalaxyNote4()/*-{return this.GalaxyNote4;}-*/;
        public final native DeviceEntity GalaxyNote3Neo()/*-{return this.GalaxyNote3Neo;}-*/;
        public final native DeviceEntity GalaxyNote3()/*-{return this.GalaxyNote3;}-*/;
        public final native DeviceEntity GalaxyNote2()/*-{return this.GalaxyNote2;}-*/;
        public final native DeviceEntity GalaxyNote()/*-{return this.GalaxyNote;}-*/;
        public final native DeviceEntity GalaxyNote8_0()/*-{return this.GalaxyNote8_0;}-*/;
        public final native DeviceEntity HtcOne()/*-{return this.HtcOne;}-*/;
        public final native DeviceEntity XperiaZ()/*-{return this.XperiaZ;}-*/;
        public final native DeviceEntity MotorolaMotoG2()/*-{return this.MotorolaMotoG2;}-*/;
        public final native DeviceEntity MotorolaMotoG()/*-{return this.MotorolaMotoG;}-*/;
        public final native DeviceEntity LGG5()/*-{return this.LGG5;}-*/;
        public final native DeviceEntity LGG4()/*-{return this.LGG4;}-*/;
        public final native DeviceEntity LGG3()/*-{return this.LGG3;}-*/;
        public final native DeviceEntity LGG2()/*-{return this.LGG2;}-*/;
        public final native DeviceEntity MeizuMX4Pro()/*-{return this.MeizuMX4Pro;}-*/;
        public final native DeviceEntity MeizuMX4()/*-{return this.MeizuMX4;}-*/;
        public final native DeviceEntity XiaomiMi4LTE()/*-{return this.XiaomiMi4LTE;}-*/;
        public final native DeviceEntity XiaomiMi4W()/*-{return this.XiaomiMi4W;}-*/;
        public final native DeviceEntity XiaomiMi4()/*-{return this.XiaomiMi4;}-*/;
        public final native DeviceEntity XiaomiMi3()/*-{return this.XiaomiMi3;}-*/;
        public final native DeviceEntity LenovoTab2A730HC()/*-{return this.LenovoTab2A730HC;}-*/;
        public final native DeviceEntity LenovoA889()/*-{return this.LenovoA889;}-*/;
        public final native DeviceEntity LenovoA850()/*-{return this.LenovoA850;}-*/;
        public final native DeviceEntity Lumia925()/*-{return this.Lumia925;}-*/;
        public final native DeviceEntity Lumia920()/*-{return this.Lumia920;}-*/;
        public final native DeviceEntity Lumia820()/*-{return this.Lumia820;}-*/;
        public final native DeviceEntity Lumia635()/*-{return this.Lumia635;}-*/;
        public final native DeviceEntity UnidentifiedDesktop()/*-{return this.UnidentifiedDesktop;}-*/;
    }

    public final native O O()/*-{
        return this.O;
    }-*/;

    public final native OS OS()/*-{
        return this.OS;
    }-*/;

    public final static class O extends JavaScriptObject {
        protected O() {}
        public final native OSEntity Unidentified()/*-{return this.Unidentified;}-*/;
        public final native OSEntity Ios()/*-{return this.Ios;}-*/;
        public final native OSEntity Android()/*-{return this.Android;}-*/;
        public final native OSEntity WindowsPhone()/*-{return this.WindowsPhone;}-*/;
        public final native OSEntity Windows()/*-{return this.Windows;}-*/;
        public final native OSEntity MacOS()/*-{return this.MacOS;}-*/;
        public final native OSEntity Unix()/*-{return this.Unix;}-*/;
        public final native OSEntity FireOS()/*-{return this.FireOS;}-*/;
    }

    public final native B B()/*-{
        return this.B;
    }-*/;

    public final native Browser Browser()/*-{
        return this.Browser;
    }-*/;

    public final static class B extends JavaScriptObject {
        protected B() {}
        public final native BrowserEntity Unidentified()/*-{return this.Unidentified;}-*/;
        public final native BrowserEntity Safari()/*-{return this.Safari;}-*/;
        public final native BrowserEntity Chrome()/*-{return this.Chrome;}-*/;
        public final native BrowserEntity AndroidWebView()/*-{return this.AndroidWebView;}-*/;
        public final native BrowserEntity AndroidWebkit()/*-{return this.AndroidWebkit;}-*/;
        public final native BrowserEntity AndroidWebkitChrome()/*-{return this.AndroidWebkitChrome;}-*/;
        public final native BrowserEntity SamsungBrowser()/*-{return this.SamsungBrowser;}-*/;
        public final native BrowserEntity Ie()/*-{return this.Ie;}-*/;
        public final native BrowserEntity Edge()/*-{return this.Edge;}-*/;
        public final native BrowserEntity UcBrowser()/*-{return this.UcBrowser;}-*/;
        public final native BrowserEntity Firefox()/*-{return this.Firefox;}-*/;
        public final native BrowserEntity BaiduBrowser()/*-{return this.BaiduBrowser;}-*/;
        public final native BrowserEntity DUBrowser()/*-{return this.DUBrowser;}-*/;
        public final native BrowserEntity QQBrowser()/*-{return this.QQBrowser;}-*/;
        public final native BrowserEntity _360Browser()/*-{return this._360Browser;}-*/;
        public final native BrowserEntity Opera()/*-{return this.Opera;}-*/;
        public final native BrowserEntity YandexBrowser()/*-{return this.YandexBrowser;}-*/;
        public final native BrowserEntity Maxthon()/*-{return this.Maxthon;}-*/;
        public final native BrowserEntity Silk()/*-{return this.Silk;}-*/;
    }
}