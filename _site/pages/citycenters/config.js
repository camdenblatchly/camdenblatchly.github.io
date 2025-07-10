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
            description: `A few weeks ago, while explaining to a friend where I live relative to "downtown" Boston, I started wondering, what exactly is downtown? We often refer to a city’s center as if it’s a concrete place, but in reality, it’s more of a “know-it-when-you-see-it” idea. Nevertheless, if you had to choose a single point to represent the center of Boston, where would it be? I tried to find an answer.`,
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
                },
                {
                    layer: 'city-centers-labels',
                    'text-opacity': 0
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
            description: `I started with Google Earth, which places a marker for any city when searched. For Boston, it points to a spot near the old city hall and King’s Chapel. It’s a reasonable choice, but I couldn’t find any documentation on how these locations are determined. Lacking a clear explanation and wanting a more concrete answer, I kept looking.`,
            location: {
                center: [-71.05977, 42.35843],
                zoom: 14,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showGoogleEarthDefinition',
            onChapterEnter: [
                {
                    layer: 'city-centers',
                    'circle-opacity': .9,
                    'circle-stroke-opacity': 1
                },
                {
                    layer: 'city-centers-labels',
                    'text-opacity': 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            description: `Next, I tried to see if the government had a consistent way of defining city centers. I found that the U.S. Census Gazetteer publishes coordinates for all cities using census geographic boundaries. Unfortunately, this measure immediately failed my sense check, placing the center of Boston over by Pleasure Bay. It’s a beautiful spot, but definitely not the city center. Geographic boundaries are political and (therefore) weirdly shaped, better methods seemed possible.`,
            location: {
                center: [-71.02017, 42.33196],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showGazetteerDefinition',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            description: `Upon further searching, I found that the U.S. Census Bureau did try to identify downtowns at one point. Back in 1982, they pinpointed the Census tracts in each city which most closely overlapped with the Central Business District. 31 years later, researchers from the Federal Reserve calculated centroids from these tracts. Defining city centers as hubs of business and employment struck me as a widely accepted and practical approach. Though dated, I found their estimate to be the most credible approximation yet.`,
            location: {
                center: [-71.05870, 42.35490],
                zoom: 15,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showCBDDefinition',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'city-hall-chapter',
            alignment: 'left',
            hidden: false,
            description: 'City hall is a common reference point for city centers, so I thought it would be interesting to see how it compares to the other definitions. The Boston City Hall is located at 1 City Hall Square, which is very close to the Google Earth definition.',
            location: {
                center: [-71.05776, 42.35918],
                zoom: 15,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showCityHallDefinition',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: `As a counterpoint to the Federal Reserve’s job-centric definition, I was curious if a definition based on population centers would be similarly compelling. To that end, I used American Community Survey data to calculate a population-density-weighted average of the city’s densest neighborhoods. Located right next to the John Hancock Tower in the heart of Back Bay, this estimate deviated from the Google Earth and Central Business District estimates, but nonetheless felt like a decent choice.`,
            location: {
                center: [-71.07566, 42.34886],
                zoom: 13,
                pitch: 20,
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
            description: 'Finally, I kept it simple and followed my childhood conception of the city center: it’s where the big buildings are. Using radar data collected by Space Shuttle Endeavor, I calculated the centroid of the neighborhood with the tallest average building height.',
            location: {
                center: [-71.06014, 42.35465],
                zoom: 14,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showBuildingHeightDefinition',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
