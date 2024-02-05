sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'application2/test/integration/FirstJourney',
		'application2/test/integration/pages/table2List',
		'application2/test/integration/pages/table2ObjectPage',
		'application2/test/integration/pages/table1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, table2List, table2ObjectPage, table1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('application2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetable2List: table2List,
					onThetable2ObjectPage: table2ObjectPage,
					onThetable1ObjectPage: table1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);