sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'app3',
            componentId: 'table2List',
            contextPath: '/table2'
        },
        CustomPageDefinitions
    );
});