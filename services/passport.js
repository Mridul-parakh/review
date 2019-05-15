const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');
const User=require('../models/Users');

passport.serializeUser((user,done)=>{
  //console.log(user.id);
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{
 // console.log("hh");
User.findById(id)
.then(user=>{
  //console.log(user);
 done(null,user);
});
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy:true
  },
(accessToken,refreshToken,profile,done)=>{
  
  User.findOne({googleID:profile.id})
  .then(profile=>{
    if(profile){
      // 
    return done(null,profile);
      //console.log(profile);
    }
    else{
      new User({googleID:profile.id}).save()
.then(profile=>done(null,profile));
    }
  })

}
));