var config = {
    // style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3', //example
    // accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg', //example
    style: 'mapbox://styles/veronia0824/cka0i7q5p2p2n1ilps372jjzh', //my map style
    accessToken: 'pk.eyJ1IjoidmVyb25pYTA4MjQiLCJhIjoiY2ozNzdxbDBlMDAzMjJ3bXBiNWl1N2lsbCJ9.YGHpnvqbrPYoNRaRFehv3g', //my map token
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: 'How walkable is NYC for people age 65+?',
    subtitle: 'Building an equitable city for senior residents.',
    byline: 'By Azury Lin, Barbara Alonso, Tanvi Sharma',
    footer: 'Hover over an area to explore its facility score.',
    chapters: [
        {
            id: 'sec-0',
            title: 'There is a growing desire of aging in place.',
            image: './img/seniorwalk.jpg',
            description: 'In a 2018 survey done by AARP shows, over 70% of boomers prefer aging in place and residing at where they are instead of moving to a senior facility, more than half of the Americans over 50 desire living within one mile of daily resources.',
            location: {
                center: [-73.73194, 40.78607],
                zoom: 9.8,
                pitch: 0,
                bearing: -10
            },
            onChapterEnter: [
                {
                    layer: 'nyc-neighborhood-fill',
                    opacity: 1
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
            title: 'These are areas where senior population above the average.',
            image: '',
            description: 'We are curious whether the areas in New York City where the most seniors currently reside are well equipped with amenities planned for their needs, consider there is a long history that urban neighborhoods are mostly planned for the needs of typical residents.',
            location: {
                center: [-73.73194, 40.78607],
                zoom: 9.8,
                pitch: 0,
                bearing: -10
            },
            onChapterEnter: [
                {
                    layer: 'final-senior-pop',
                    opacity: 1
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
            title: 'Are people age 65+ sharing similar access to facilities across the city?',
            // image: '',
            description: 'Convenient transit network and proximity to cultural programs in Manhattan has made New York City one of the most favorable place for senior retirement. However, in our study, we found out that areas with significant amount of residents age over 65, such as Staten Island, East Queens and Brooklyn, are short on essential amenities such as foodmarts and restaurants within walkable distances.',
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
            title: 'Not every senior who lives in New York City is sharing the same convenience as one who lives in Manhattan.',
            // image: '',
            description: 'Let\'\s take a look at an area with high density of people age 65+. A senior who lives in Windsor Oak will have no access to food market within walking distance.',
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
            ]
        },
        {
            id: 'sec-4-example',
            title: '',
            // image: '',
            description: 'And seniors who live around Howard Beach might have a hard time finding foodmarts within short walking distances.',
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
            title: 'Our methodology of equitability analysis',
            // image: '',
            description: 'We base our analysis on a combination of both Clarence Perry’s principle and Yang and Diez-Roux’s research to help us evaluate the equitability of an area where residents age 65 highly concentrate. First, we highlight the areas with above mean senior population. Second, highlight available facilities within these areas. Third, multiply the amount of facilities by the walkscore to attain final facility score.',
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
                // }
                {
                    layer: 'eq-score',
                    opacity: 1
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
            title: 'How can we address walkability and equitability for seniors?',
            // image: '',
            description: 'We hope this map will help urban planners and policy makers identify the needs for development and to attract the attention of community programs and business owners by showing where the mass opportunities and profits are.'+'\n'+'Click on a area to explore the walkability and the availability of facilities.',
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
                // {
                //     layer: 'trc18-spop-2step',
                //     opacity: 0
                // }
            ]
        }
    ]
};
