using Ms as service from '../../srv/service';

annotate service.table2 with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'iddd',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
            ![@UI.Hidden],
        },
    ]
);
annotate service.table2 with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'child2',
            ID : 'child2',
            Target : '@UI.FieldGroup#child2',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'child',
            ID : 'child',
            Target : 'name_codetotable1/@UI.LineItem#child',
        },
    ]
);
annotate service.table1 with @(
    UI.LineItem #table1 : [
    ]
);
annotate service.table1 with @(
    UI.LineItem #child : [
    ]
);
annotate service.table2 with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : '{i18n>TableView}',
    }
);
annotate service.table1 with @(
    UI.LineItem #tableView : [
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View table1',
    }
);
annotate service.table2 with @(
    UI.FieldGroup #child2 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : name_codetotable1.customerName,
                Label : 'customerName',
            },{
                $Type : 'UI.DataField',
                Value : name_codetotable1.customerNumber,
                Label : 'customerNumber',
            },{
                $Type : 'UI.DataField',
                Value : name_codetotable1.id,
                Label : 'id',
            },{
                $Type : 'UI.DataField',
                Value : name_codetotable1.inquiryNumber,
                Label : 'inquiryNumber',
            },{
                $Type : 'UI.DataField',
                Value : name_codetotable1.orderDate,
                Label : 'orderDate',
            },],
    }
);
