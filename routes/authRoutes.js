const express=require('express');
const router=express.Router();
const passport=require('passport');

router.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}));

router.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
  res.redirect('/serveys');
});

router.get('/api/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
})

router.get('/api/authroute',(req,res)=>{
    //res.send(req);
    //console.log(req.user);
  res.send(req.user);
})

module.exports=router;