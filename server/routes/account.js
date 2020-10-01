const express = require ('express');
const router = express.Router();
const account = require('../models/account');

router.get("/getAllCart", (req, res, next) => {
    account.findById({_id:"5f7610722c5e6fc75f0c76ab"})
        .then(data => res.json(data))
        .catch(next)
});
router.post("/updateCart", (req, res, next) => {
    account.findByIdAndUpdate({_id:"5f7610722c5e6fc75f0c76ab"},{ $push :{Cart:req.body}}, {useFindAndModify: false, new: true})
        .then(res.send("success"))
});

module.exports = router;