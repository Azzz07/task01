sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'application2',
            componentId: 'table2List',
            contextPath: '/table2'
        },
        CustomPageDefinitions
    );
});