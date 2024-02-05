sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'application1/test/integration/FirstJourney',
		'application1/test/integration/pages/table1List',
		'application1/test/integration/pages/table1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, table1List, table1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('application1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetable1List: table1List,
					onThetable1ObjectPage: table1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);