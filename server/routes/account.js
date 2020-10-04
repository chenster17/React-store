const express = require ('express');
const router = express.Router();
const account = require('../models/account');

router.get("/getAllCart", (req, res, next) => {
    account.findById({_id:"5f7610722c5e6fc75f0c76ab"})
        .then(data => res.json(data))
        .catch(next)

});
router.post("/updateCart", (req, res, next) => {
    account.findById({_id:"5f7610722c5e6fc75f0c76ab"})
        .then(data => {
            var accept = false;
            for(var i = 0; i < data.Cart.length; i++){
                if(data.Cart[i].id === req.body.id){
                    accept = true;
                    data.Cart[i].total += 1;
                    account.findByIdAndUpdate({_id:"5f7610722c5e6fc75f0c76ab"},{Cart :data.Cart}, {useFindAndModify: false, new: true})
                        .then(res.send("success"))
                }
            }
            if (accept === false){
                account.findByIdAndUpdate({_id:"5f7610722c5e6fc75f0c76ab"},{$push : {Cart :{type:req.body.type, id:req.body.id, total:1}}}, {useFindAndModify: false, new: true})
                    .then(res.send("success"))
            }
        })
        .catch(next)

});
router.delete("/deleteAll", (req, res, next) => {
    account.findById({_id:"5f7610722c5e6fc75f0c76ab"})
        .then(data => {
            account.findByIdAndUpdate({_id:"5f7610722c5e6fc75f0c76ab"},{Cart :[]}, {useFindAndModify: false, new: true})
                .then(res.send("success"))
        })
});

module.exports = router;