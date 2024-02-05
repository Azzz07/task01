sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'application2',
            componentId: 'table1ObjectPage',
            contextPath: '/table2/name_codetotable1'
        },
        CustomPageDefinitions
    );
});