sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'application1',
            componentId: 'table1List',
            contextPath: '/table1'
        },
        CustomPageDefinitions
    );
});