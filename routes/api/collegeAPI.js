const router = require("express").Router();
const axios = require('axios');

router.get('/all', function(req, res) {
    axios.get("url", function(data) {
        res.send(data)
    });
})

module.exports = router;