sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'app3',
            componentId: 'table2ObjectPage',
            contextPath: '/table2'
        },
        CustomPageDefinitions
    );
});