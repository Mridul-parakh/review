const express=require('express');
const router=express.Router();
const keys=require('../config/keys');
const stripe=require('stripe')(keys.stripeSecretkey);

router.post('/api/stripe',(req,res)=>{
    if(!req.user){
        return res.status(404).send({error:"you must logged in"});
    }
// console.log(req.body);
stripe.charges.create({
    amount:'500',
    currency:'usd',
    description:'$5 for 5 credits',
    source:req.body.id
}).then((charges)=>{
// console.log(charges);
req.user.credits+=5;
req.user.save().then(charge=>res.send(charge));

});
})

module.exports=router;