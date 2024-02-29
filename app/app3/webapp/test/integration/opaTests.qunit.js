sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'app3/test/integration/FirstJourney',
		'app3/test/integration/pages/table2List',
		'app3/test/integration/pages/table2ObjectPage'
    ],
    function(JourneyRunner, opaJourney, table2List, table2ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('app3') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetable2List: table2List,
					onThetable2ObjectPage: table2ObjectPage
                }
            },
            opaJourney.run
        );
    }
);