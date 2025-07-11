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
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: "Where is Boston's city center?",
    subtitle: 'Six perspectives on the center of Boston',
    byline: 'By Camden Blatchly',
    footer: `<b>Sources</b>
    <br>Holian, M. J. (2019). Where is the city’s center? On the recent use 
    of measures of central city location. <em>Cityscape: A Journal of Policy Development 
    and Research</em>, 21(2), 213–226. U.S. Department of Housing and Urban Development.
    <br> 2019 American Community Survey 5-Year Estimates. U.S. Census Bureau.
    <br> Falcone, J. A. (2016). <em>U.S. national categorical mapping of building heights by 
    block group from Shuttle Radar Topography Mission data</em>. U.S. Geological Survey. <a href="https://doi.org/10.5066/F7W09416" target="_blank">https://doi.org/10.5066/F7W09416</a>
    <br>
    <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.`,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'fully',
            hidden: false,
            description: `A few weeks ago, while explaining to a friend where I live relative to downtown Boston, I started wondering, where exactly is <em>downtown</em>? We often refer to a city’s center as if it’s a concrete place, but, in practice, it’s more of a “know-it-when-you-see-it” type of idea. I was curious though, if you had to choose a single point to represent the center of Boston, where would it be? I dug into the research and crunched the numbers to find out. So where is the center of Boston? Here are six possible answers.`,
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
            description: `The quickest result can be found by using <b>Google Earth</b>, which places a marker when you search for any city. For Boston, it points to a spot near Old City Hall and King’s Chapel. Historically-speaking, it’s a reasonable choice, but Google provides no information on how these locations are chosen. It’s a convenient answer, but a more justifiable one is needed for research or policy decisions.`,
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
            description: `If you’d like to use a government source, the <b>U.S. Census Gazetteer</b> publishes “representative” coordinates for every city in the country. Unfortunately, because the points are based on geographic boundaries—no matter how irregular or contrived—they often fall in places far removed from how most people experience or navigate the city. In the case of Boston, the Gazetteer places the city center near Pleasure Bay. It’s a beautiful spot, but few residents would consider it the heart of the city.`,
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
            description: `Back in 1982, the Census Bureau took a different approach to identifying downtowns in U.S. cities. Rather than pinpointing the geographic center, they found the Census tracts which most closely overlapped with each city’s <b>Central Business District</b>. Tracts represent areas, so to get to a specific point, researchers from the Federal Reserve calculated centroids in 2013. These estimates offer a conceptually clear view of the city center as the place where most <b>jobs are concentrated</b>, making them especially useful for economic research.`,
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
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: `As a counterpoint to defining the city center by where people work, you could instead focus on <b>where people live</b>. To explore this approach, I used American Community Survey data to calculate a weighted average of Boston’s densest neighborhoods—specifically, the top 20% of Census block groups ranked by population density. The resulting point landed near the John Hancock Tower in Back Bay, demonstrating that people don’t always live right next to where they work.`,
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
            description: 'Physically, city centers are where the skyline peaks. Using radar data collected by Space Shuttle Endeavor, I calculated the centroid of the block group with the <b>tallest average building height</b>. That estimate ended up being located a block from the business district definition, suggesting that building height can serve as an indicator of a city’s commercial core.',
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
        },
        {
            id: 'city-hall-chapter',
            alignment: 'left',
            hidden: false,
            description: 'Finally, <b>City Hall</b> often serves as the symbolic anchor for a city. While it isn’t always connected to the economic or geographic center, City Hall reflects the civic and administrative heart of a place. In Boston’s case, it proves to be a reasonably good estimate, located in Government Center and within walking distance of the business district, Boston City Hall reflects the city’s political and historical core.',
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
            id: 'conclusion-chapter',
            alignment: 'left',
            hidden: false,
            description: `So there you have it, six different ways to define 
            the center of Boston. Now that you’ve seen the options, 
            which one do you think is the best?`,
            location: {
                center: [-71.06014, 42.35465],
                zoom: 13,
                pitch: 30,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'showAllDefinitions',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
