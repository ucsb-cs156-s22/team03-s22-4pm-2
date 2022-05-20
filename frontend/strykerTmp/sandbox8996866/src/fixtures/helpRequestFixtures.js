// @ts-nocheck
const helpRequestFixtures = {
    oneHelpRequest: {
        "id": 1,
        "requesterEmail": "scsampath@ucsb.edu",
        "teamId": "2",
        "tableOrBreakoutRoom": "table",
        "requestTime": "2022-01-02T12:00:00",
        "explanation": "Need help setting up heroku",
        "solved": false
    },
    threeHelpRequests: [
        {
            "id": 1,
            "requesterEmail": "naruto.shinobi.com",
            "teamId": "7",
            "tableOrBreakoutRoom": "breakout room",
            "requestTime": "2022-01-02T12:00:00",
            "explanation": "need ramen",
            "solved": true
        },
        {
            "id": 2,
            "requesterEmail": "luffy.d.com",
            "teamId": "strawhat",
            "tableOrBreakoutRoom": "breakout room",
            "requestTime": "2022-01-02T12:00:00",
            "explanation": "need to become pirate king",
            "solved": false
        },
        {
            "id": 3,
            "requesterEmail": "goku.dragonball.com",
            "teamId": "z",
            "tableOrBreakoutRoom": "table",
            "requestTime": "2022-01-02T12:00:00",
            "explanation": "Need food",
            "solved": true
        }
    ]
};


export { helpRequestFixtures };