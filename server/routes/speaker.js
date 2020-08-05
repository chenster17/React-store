const express = require ('express');
const router = express.Router();
const speakers = require('../models/speaker');

router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    speakers.find({})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;
