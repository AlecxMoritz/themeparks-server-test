const router = require('express').Router();
const themeParks = require('themeparks');

router.get('/magicKingdom', (req, res) => {
    const magicKingdom = new themeParks.Parks.WaltDisneyWorldMagicKingdom();

    let formattedRides = [];

    magicKingdom.GetWaitTimes()
        .then(rides => {
            rides.map(ride => {
                const rideObj = {
                    name : ride.name,
                    waitTime : ride.waitTime
                };

                formattedRides.push(rideObj);
            })

            res.json(formattedRides);
        });
});

router.get('/universal', (req, res) => {

})

module.exports = router;