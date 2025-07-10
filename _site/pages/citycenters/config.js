var config = {
    style: 'mapbox://styles/camdenblatchly/cmcwofaru013601qv4y5m6xdb',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiY2FtZGVuYmxhdGNobHkiLCJhIjoiY2xzZmRld3BnMHg4dTJtbGdya3A5amxmYyJ9.YWpZ0yjrrFd228gsQwfx3A',
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    showMarkers: false,
    insetOptions: {
        markerColor: "blue"
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: "Where is Boston's city center?",
    subtitle: 'Getting to the bottom of a surprisingly complex question',
    byline: 'By Camden Blatchly',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'fully',
            hidden: false,
            description: `A few weeks ago, while explaining to a friend 
            where I live relative to ‘downtown’ Boston, I got philosophical. 
            I wondered, <em>what even is downtown</em>? We refer to a city’s center 
            all the time, but abstractly. It’s a know-it-when-you-see-it 
            type phenomenon. Sometimes though, you need to be specific, like 
            when planning infrastructure or conducting economic research. 
            How then should we define the city center? I tried to find out.`,
            location: {
                center: [-71.08131, 42.33994],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideAllDefinitions',
            showMarker: true,
            onChapterEnter: [
                {
                    layer: 'city-centers',
                    'circle-opacity': 0,
                    'circle-stroke-opacity': 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            description: 'What does this mean?',
            location: {
                center: [-71.08131, 42.33994],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'showGoogleEarthDefinition',
            onChapterEnter: [
                {
                    layer: 'city-centers',
                    'circle-opacity': .9,
                    'circle-stroke-opacity': 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Population',
            description: 'Something about how I calculated this',
            location: {
                center: [-71.08131, 42.33994],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showPopulationDefinition',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Tall Buildings',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-71.08131, 42.33994],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showBuildingHeightDefinition',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Central Business District',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-71.08131, 42.33994],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showCBDDefinition',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Gazetteer',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-71.08131, 42.33994],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showGazetteerDefinition',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
