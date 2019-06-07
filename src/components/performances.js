export const performanceList = [
    { id:"animalNature", name:"Animal Nature"},
    { id:"backFromTheBrink", name:"Back From the Brink"},
    { id:"continuum", name:"<i>continuum</i>"}
];

export const performanceData = {
    animalNature: {
        name: "Animal Nature",
        description: "An evening of revelry and sensuality, journeying from political to mystical. Acts feature Jerboa’s signature athletic and emotional style. Special guests include live music, circus arts, burlesque, and more. Friday and Saturday evening shows followed by live DJs.",
        runs: [
            {
                venueId: "YAW",
                tickets: {
                    VIP: {
                        cost: "$50 presale, $60 at the door",
                        description: "Front row seats, champagne, and chocolate included"
                    },
                    GA: {
                        cost: "$25 presale, $30 at the door"
                    },
                    Youth: {
                        cost: "$5",
                        description: "For youth under age 13"
                    }
                },
                dates: {
                    "2018-02-09T20:00:0": { tickets: ["VIP", "GA"] },
                    "2018-02-10T20:00:0": { tickets: ["VIP", "GA"] },
                    "2018-02-11T14:00:0": { tickets: ["GA", "Youth"], note:"This event altered to be family-friendly" },
                    "2018-02-11T20:00:0": { tickets: ["VIP", "GA"] }
                }
            }
        ]
    },
    backFromTheBrink: {
        name: "Back From the Brink",
        description: "This acrobatic, energetic modern dance ballet takes audiences on a gripping journey into the human psyche. Conceived around the classic stages of grief, Act I begins after a traumatic event leads the dancers to reflect on their lives. Act II moves into the discovery of how to push forward, build new relationships, find community, and hope.",
        runs: [
            {
                venueId: "HudsonGuild",
                dates: {
                    "2007-11-14": {},
                    "2007-11-15": {},
                    "2007-11-16": {},
                    "2007-11-17": {}
                }
            },
            {
                venueId: "ACT",
                dates: {
                    "2009-02-13": {},
                    "2009-02-14": {}
                }
            },
            {
                venueId: "ACT",
                dates: {
                    "2010-09-17": {},
                    "2010-09-18": {}
                }
            }
        ]
    },
    continuum: {
        name: "<i>continuum</i>",
        description: "<i>continuum</i> is an exploration the complexities of human relationships and the patterns we fall into, both good and bad. As is Jerboa Dance’s style, it is an acrobatic, energetic work relying on raw emotion and the strong technical background of the dancers to draw in the audience. Rather than a story with a clear beginning and end, continuum is a window into the moments of our lives.",
        runs:[
            {
                venueId:"ACT",
                dates:{
                    "2010-06-04": {},
                    "2010-06-05": {}
                }
            },
            {
                venueId:"CenterHouseTheater",
                dates:{
                    "2017-03-24": {},
                    "2017-03-25": {},
                    "2017-03-22": {},
                    "2017-04-01": {}
                }
            },
            {
                venueId:"CenterHouseTheater",
                extra: "Bumbershoot",
                dates:{
                    "2017-10-01": {},
                    "2017-10-03": {}
                }
            }
        ]
    }
};