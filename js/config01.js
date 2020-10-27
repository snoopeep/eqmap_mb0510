var config = {
    // style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3', //example
    // accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg', //example
    style: 'mapbox://styles/veronia0824/cka0i7q5p2p2n1ilps372jjzh', //my map style
    accessToken: 'pk.eyJ1IjoidmVyb25pYTA4MjQiLCJhIjoiY2ozNzdxbDBlMDAzMjJ3bXBiNWl1N2lsbCJ9.YGHpnvqbrPYoNRaRFehv3g', //my map token
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: 'Senior Amenity Access in New York City',
    subtitle: 'Building an equitable city for senior residents.',
    byline: 'By Azury Lin, Barbara Alonso Cabrero, Tanvi Sharma',
    footer: '',
    chapters: [
        {
            id: 'sec-0',
            title: 'There is a growing desire for aging in place.',
            image: './img/older-couples-uplash.jpg',
            description: '<small>(<span>Photo by <a href="https://unsplash.com/@mtimber71?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mark Timberlake</a> on <a href="https://unsplash.com/collections/4896282/elderly-people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>)</small><br><br>A 2018 <a href="https://www.aarp.org/research/topics/community/info-2018/2018-home-community-preference.html">survey</a> by AARP shows that over 70% of boomers prefer aging in place, meaning that they would rather reside where they are instead of moving to a senior facility. Additionally, more than half of the Americans over 50 desire to live within one mile of daily resources and amenities.',
            location: {
                center: [ -73.83776, 40.76092],
                // center: [-73.73194, 40.78607],
                zoom: 10,
                pitch: 0,
                bearing: -10
            },
            onChapterEnter: [
                {
                    layer: 'nyc-neighborhood-fill',
                    opacity: .6
                },
                {
                    layer: 'nyc-neighborhood-stroke',
                    opacity: 1
                },
                {
                    layer: 'eq-score-stroke',
                    opacity: 0
                },
                {
                    layer: 'eq-score',
                    opacity: 0
                },
                {
                    layer: 'final-senior-pop',
                    opacity: 0
                },
                {
                    layer: 'fac-eats-aa29x1',
                    opacity: 0
                },
                {
                    layer: 'fac-foodmarts-dh5806',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'nyc-neighborhood-fill',
                    opacity: 0
                },
                {
                    layer: 'nyc-neighborhood-stroke',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sec-1',
            title: 'These are the NYC census tracts where the number of seniors is greater than 443 people – the median senior population.',
            // image: '',
            description: 'We are curious whether the areas in New York City where the most seniors currently reside are well equipped with amenities for their needs. Consider that there is a long history of urban neighborhoods being primarily planned for the needs of typical residents.',
            location: {
                center: [-73.73194, 40.78607],
                zoom: 9.8,
                pitch: 0,
                bearing: -10
            },
            onChapterEnter: [
                {
                    layer: 'final-senior-pop',
                    opacity: .9
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'trc18-spop-2step',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sec-2',
            title: 'Do people over 65 share similar levels of access to amenities across the city?',
            // image: '',
            description: 'Convenient transit network and proximity to cultural programs in Manhattan has made New York City one of the most favorable places for <a href="https://www.nytimes.com/2017/06/09/business/retirement/retirement-manhattan-senior-citizens.html">senior retirement</a>. <br><br>However, in our study, we found that areas with significant numbers of residents over 65, such as <b>Staten Island, East Queens, and South Brooklyn</b>, are short on essential amenities such as <b id=foodmarts>foodmarts</b> and <b id=eats>restaurants</b> within walkable distances.',
            location: {
                center: [-73.73194, 40.78607],
                zoom: 9.8,
                pitch: 0,
                bearing: -10
            },
            onChapterEnter: [
                {
                    layer: 'fac-foodmarts-dh5806',
                    opacity: 1
                },
                {
                    layer: 'fac-eats-aa29x1',
                    opacity: 1
                },
                {
                    layer: 'final-senior-pop',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'trc18-spop-2step',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sec-3-example',
            title: 'Not every senior who lives in New York City shares the same convenience as one who lives in Manhattan.',
            // image: '',
            description: 'Let\'\s take a look at one area with a higher than median number of seniors. A senior who lives in <b class=keywords>Windsor Oak</b> will have no access to food markets within walking distance.',
            location: {
                center: [-73.73194, 40.75325],
                zoom: 12.62,
                pitch: 44.00,
                bearing: -20.00
            },
            onChapterEnter: [
                {
                    layer: 'trc18-windsoroak',
                    opacity: 1
                },
                {
                    layer: 'final-senior-pop',
                    opacity: .3
                }
            ],
            onChapterExit: [
                {
                    layer: 'trc18-windsoroak',
                    opacity: 0
                }
            ],
            button: 'Explore interactive map'
        },
        {
            id: 'sec-4-example',
            title: '',
            // image: '',
            description: 'Seniors who live around <b class=keywords>Howard Beach</b> might also have a hard time finding foodmarts within short walking distances.',
            location: {
                center: [-73.83288, 40.65608],
                zoom: 13.62,
                pitch: 44.00,
                bearing: -20.00
            },
            onChapterEnter: [
                {
                    layer: ('trc18-Howardbeach'),
                    opacity: 1
                },
                {
                    layer: 'eq-score-stroke',
                    opacity: 0
                },
                {
                    layer: 'eq-score',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'trc18-Howardbeach',
                    opacity: 0
                },
                {
                    layer: 'fac-eats-aa29x1',
                    opacity: 0
                },
                {
                    layer: 'fac-foodmarts-dh5806',
                    opacity: 0
                }
            ]
        },
        // {
        //     id: 'wiss',
        //     title: 'Why does building a walkable city matter?',
        //     image: '',
        //     description: 'Those who live independently as well as those who reside at Senior Apartments rated the importance of a walkable neighborhood almost twice as highly as having access to public transit. People age over 65 across different income brackets have expressed desirability to live closer to essential facilities.'+'\n'+'Building an age-friendly city will likely become even more relevant to New York City, as the population of 65 and over will likely to grow by 41% in the next 20 years. Meanwhile, investing in walkable neighborhoods not only benefits the aging population but also substantializes a foundation toward a more sustainable city.',
        //     location: {
        //         center: [-75.21223, 40.05028],
        //         zoom: 13.08,
        //         pitch: 47.50,
        //         bearing: 32.80
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'wissahickon',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'wissahickon',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: 'sec-5-method',
            title: 'Our methodology of accessibility analysis',
            // image: '',
            description: 'We base our analysis on a combination of Clarence Perry’s principle and Yang and Diez-Roux’s <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3377942/">research</a> to help us evaluate the accessibility of key amenities in areas with high numbers of seniors. <br><br>First, we highlighted the census tracts where the number of people over the age of 65 is above the median. The median number of seniors over 65 per census tract in NYC is 443, so the highlighted tracts are home to more than 443 seniors. <br><br>Second, we highlighted <b class=keywords>available amenities</b> within these areas. These amenities represent the daily or weekly needs of seniors. <br><br>Third, we scored each census tract as a function of the <b class=keywords>number of amenities, the area of the tract, and its <a href="https://www.walkscore.com/methodology.shtml">WalkScore</a>.</b><br><br><small>Amenity Access Score Index<br>Poor <b class=scorekey> ––––– </b> High</small>',
            location: {
                center: [-73.73194, 40.78607],
                zoom: 9.8,
                pitch: 0,
                bearing: -10
            },
            onChapterEnter: [
                // {
                //     layer: 'fac-foodmarts-dh5806',
                //     opacity: 0
                // },
                {
                    layer: 'eq-score',
                    opacity: 1
                },
                {
                    layer: 'eq-score-stroke',
                    opacity: 0
                },
                {
                    layer: 'final-senior-pop',
                    opacity: 0
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'sec-6-closure',
            title: 'How can we address amenity accessibility for seniors?',
            // image: '',
            description: 'We hope this map will help <b class=keywords>urban planners</b></br> and <b class=keywords>policy makers</b> identify development needs and that it will <b class=keywords>attract the attention of community programs</b> and <b class=keywords>business owners</b> by showing where the demand and opportunities are. <br><br><br><a href="https://snoopeep.github.io/eqmap_mbinteractive/">Explore the Map</a>',
            location: {
                center: [-73.73194, 40.78607],
                zoom: 9.8,
                pitch: 0,
                bearing: -10
            },
            onChapterEnter: [
                {
                    layer: 'eq-score-stroke',
                    opacity: 0.8
               }
            ],
            onChapterExit: [
                {
                    layer: 'eq-score-stroke',
                    opacity: 0
                },
                {
                    layer: 'eq-score',
                    opacity: 0
                }
            ]
        }
    ]
};
