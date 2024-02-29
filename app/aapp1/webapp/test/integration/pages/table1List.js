sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'aapp1',
            componentId: 'table1List',
            contextPath: '/table1'
        },
        CustomPageDefinitions
    );
});