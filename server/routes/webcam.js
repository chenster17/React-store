const express = require ('express');
const router = express.Router();
const webcams = require('../models/webcam');

router.get("/getAll", (req, res, next) => {
    webcams.find({})
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getwebcam/:id",(req, res, next) =>{
    webcams.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getBrands", (req, res, next) => {
    //this will return all CPUs from the database
    webcams.find({},"brand")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.brand))
                    result.push(obj.brand);
            }
            res.json(result);
        })
        .catch(next)
});

router.get("/getConnections", (req, res, next) => {
    //this will return all CPUs from the database
    webcams.find({},"connection")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.connection))
                    result.push(obj.connection);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getResolutions",(req, res, next) =>{
    webcams.find({},"resolution")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.resolution))
                    result.push(obj.resolution);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});

router.get("/getPrices",(req, res, next) =>{
    webcams.find({},"price")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.price))
                    result.push(obj.price);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});



module.exports = router;