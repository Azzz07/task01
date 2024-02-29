sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'aapp1/test/integration/FirstJourney',
		'aapp1/test/integration/pages/table1List',
		'aapp1/test/integration/pages/table1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, table1List, table1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('aapp1') + '/index.html'
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