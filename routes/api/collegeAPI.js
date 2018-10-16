const router = require("express").Router();
const axios = require('axios');

const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=UniversityofDenver"
const key = "&api_key=Kcfhwk6xaDVevOVWHtH3mfVsYejS9BtoMhD1x85h"

router.get('/all', function(req, res) {
    axios.get(url, key, function(data) {
      console.log(data)
        res.send(data)
        
    });
})

module.exports = router;