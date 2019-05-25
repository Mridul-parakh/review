const _=require('lodash');
const {Path}=require('path-parser');
const  { URL }=require('url');
const JSON=require('circular-json');
const express=require('express');
const router=express.Router();
const Servey=require('../models/Survey');
const Mailer=require('../services/Mailer');
const serveyTemplete=require('../services/emailTempletes/serveyTemplete');

router.get('/api/serveys/:serveyId/:choice',(req,res)=>{
    
res.send('thanks for voting');

});

// router.get('/api/serveys',(req,res)=>{
//   if(!req.user){
//     return res.status(404).send({error:"you must logged in"});
// }
//   const servey=Servey.find({_user:req.user.id}).select({
//     recipients:false
//   });
//   res.send(servey);
// });

router.get('/api/serveys',async (req, res) => {
  if(!req.user){
    return res.status(404).send({error:"you must logged in"});
}
  const serveys =await Servey.find({ _user: req.user.id }).select({
    recipients: false
  });

  res.send(JSON.stringify(serveys));
});

router.post('/api/serveys/webhooks', (req, res) => {
    // const p=new Path('/api/serveys/:serveyId/:choice');

    // const events=_.map(req.body,({ email, url })=>{
     
        
    //     const match=p.test(new URL(url).pathname);
    //     if(match){
    //         return { email, serveyId: match.serveyId, choice: match.choice };
    //     }
    // });
    // const compactEvents=_.compact(events);
    // const uniqueEvents=_.unionBy(compactEvents,'email','serveyId');
    // console.log(uniqueEvents);


      const p = new Path('/api/serveys/:serveyId/:choice');

  _.chain(req.body)
    .map(({ email, url }) => {
      
      const match = p.test(new URL(url).pathname);
      console.log(req.body);
      if (match) {
        return { email, serveyId: match.serveyId, choice: match.choice };
      }
    })
    .compact()
    .uniqBy('email', 'serveyId')
    .each(({ serveyId, email, choice }) => {
      Servey.updateOne(
        {
          _id: serveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }
      ).exec();
    })
    .value();
  });
  // const p = new Path('/api/serveys/:serveyId/:choice');

  // _.chain(req.body)
  //   .map(({ email, url }) => {
      
  //     const match = p.test(new URL(url).pathname);
  //     console.log(req.body);
  //     if (match) {
  //       return { email, serveyId: match.serveyId, choice: match.choice };
  //     }
  //   })
    // .compact()
    // .uniqBy('email', 'serveyId')
    // .each(({ serveyId, email, choice }) => {
    //   Survey.updateOne(
    //     {
    //       _id: serveyId,
    //       recipients: {
    //         $elemMatch: { email: email, responded: false }
    //       }
    //     },
    //     {
    //       $inc: { [choice]: 1 },
    //       $set: { 'recipients.$.responded': true },
    //       lastResponded: new Data()
    //     }
    //   ).exec();
    // })
    // .value();


router.post('/api/serveys',(req,res)=>{
    if(!req.user){
        return res.status(404).send({error:"you must logged in"});
    }
    if(req.user.credits<1){
        return res.status(404).send({error:"Not Enough Credits"});
    }
    const {title,subject,body,recipients}=req.body;
   
    const servey=new Servey({
        title,
        subject,
        body,
        recipients:recipients.split(',').map(email=>{return {email:email.trim()}}),
        _user:req.user.id,
        dateSent:Date.now()

    });
    
    const mailer=new Mailer(servey,serveyTemplete(servey));

    mailer.send();
    servey.save();
    req.user.credits-=1;
    req.user.save().then(user=>{
        return res.send(user);
    }).catch(err=>{
        return res.status(404).send(err);
    });
});

module.exports=router;