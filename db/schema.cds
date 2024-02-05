namespace task;
entity table1{
    key id:UUID;
    customerName:String;
    PoNumber:Integer;
    customerNumber:Integer;
    orderDate:Date;
    soNumber:Integer;
    inquiryNumber:Integer;
    totalOrderItems:Integer;
    tab1toname : Association to one name_code on tab1toname.name = customerName;
}

entity tab2{
    key id: String;
    customerName:String;
    tab2toname : Association to one name_code on tab2toname.name = customerName;
} 

entity name_code {
    key id : String;
    name : String;
    name_codetotable1 : Composition of many table1 on name_codetotable1.tab1toname = $self;
    name_codetotable2 : Composition of many tab2 on name_codetotable2.tab2toname = $self;
}
