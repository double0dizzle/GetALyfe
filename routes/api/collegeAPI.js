const router = require("express").Router();
const axios = require('axios');

const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name="

router.get('/all', function(req, res) {
    axios.get(url, function(data) {
        res.send(data)
    });
})

module.exports = router;