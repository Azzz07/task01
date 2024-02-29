//@ui5-bundle application2/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"application2/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("application2.Component",{metadata:{manifest:"json"}})});
},
	"application2/ext/controller/Azz.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("application2.ext.controller.Azz",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()}}})});
},
	"application2/ext/controller/Dddfile.js":function(){sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{met1:function(e){s.show("")}}});
},
	"application2/ext/controller/Demo.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("application2.ext.controller.Demo",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()}}})});
},
	"application2/i18n/i18n.properties":'# This is the resource bundle for application2\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle="wlcm"\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"application2/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"application2","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.1","toolsId":"754f1768-6987-4e65-825a-5666a6c40a50"},"dataSources":{"mainService":{"uri":"odata/v4/ms/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"title":"{{appTitle}}"},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.4","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"application2.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"table2List","target":"table2List"},{"pattern":"table2({key}):?query:","name":"table2ObjectPage","target":"table2ObjectPage"},{"pattern":"table2({key})/name_codetotable1({key2}):?query:","name":"table1ObjectPage","target":"table1ObjectPage"}],"targets":{"table2List":{"type":"Component","id":"table2List","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/table2","variantManagement":"Page","navigation":{"table2":{"detail":{"route":"table2ObjectPage"}}},"views":{"paths":[{"key":"tableView","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","keepPreviousPersonalization":false},{"key":"tableView1","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"table1"}],"showCounts":true},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"enableExport":true,"selectionLimit":15},"actions":{"ddd":{"press":"application2.ext.controller.Dddfile.met1","visible":true,"enabled":true,"requiresSelection":false,"text":"ddd"}}}},"content":{"header":{"actions":{"d2":{"press":"application2.ext.controller.Dddfile.met1","visible":true,"enabled":true,"text":"d2"}}}}}}},"table2ObjectPage":{"type":"Component","id":"table2ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/table2","navigation":{"name_codetotable1":{"detail":{"route":"table1ObjectPage"}}},"variantManagement":"Control"}}},"table1ObjectPage":{"type":"Component","id":"table1ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/table2/name_codetotable1"}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ListReport.ListReportController":{"controllerName":"application2.ext.controller.Azz"},"sap.fe.templates.ObjectPage.ObjectPageController#application2::table1ObjectPage":{"controllerName":"application2.ext.controller.Demo"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
