//@ui5-bundle sap/btp/sapui5/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"sap/btp/sapui5/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/btp/sapui5/model/models"],function(e,t,i){"use strict";return e.extend("sap.btp.sapui5.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"sap/btp/sapui5/controller/View1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("sap.btp.sapui5.controller.View1",{onInit:function(){}})});
},
	"sap/btp/sapui5/i18n/i18n.properties":'title=Title\nappTitle=View1\nappDescription=App Description\n',
	"sap/btp/sapui5/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"sap.btp.sapui5","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","ach":"ach"},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"sap.btp.sapui5.view.View1","type":"XML","async":true,"id":"View1"},"dependencies":{"minUI5Version":"1.94.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.btp.sapui5.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"sap.btp.sapui5.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}}},"sap.cloud":{"public":true,"service":"sap-btp-sapui5"}}',
	"sap/btp/sapui5/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"sap/btp/sapui5/view/View1.view.xml":'<mvc:View\n    controllerName="sap.btp.sapui5.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"\n><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content /></Page></pages></App></Shell></mvc:View>\n'
}});
