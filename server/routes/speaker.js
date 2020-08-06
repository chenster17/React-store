const express = require ('express');
const router = express.Router();
const speakers = require('../models/speaker');

router.get("/getAll", (req, res, next) => {
    speakers.find({})
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getSpeaker/:id",(req, res, next) =>{
    speakers.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getBrands", (req, res, next) => {
    //this will return all CPUs from the database
    speakers.find({},"brand")
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
router.get("/getTypes", (req, res, next) => {
    //this will return all CPUs from the database
    speakers.find({},"type")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.type))
                    result.push(obj.type);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getConnections", (req, res, next) => {
    //this will return all CPUs from the database
    speakers.find({},"connection")
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
router.get("/getWeights",(req, res, next) =>{
    speakers.find({},"weight")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.weight))
                    result.push(obj.weight);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getPowers",(req, res, next) =>{
    speakers.find({},"power")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.power))
                    result.push(obj.power);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getPrices",(req, res, next) =>{
    speakers.find({},"price")
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
router.get("/getFields", (req, res, next) => {
    res.json(["Brands", "Types", "Connections", "Weights", "Powers", "Prices"])
});


module.exports = router;