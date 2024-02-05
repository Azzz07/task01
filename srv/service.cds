using  task as my from '../db/schema';
service Ms {
    @odata.draft.enabled
 entity table1 as projection on my.table1; 
 entity table2 as projection on my.name_code;
 entity table as projection on my.tab2;
}

