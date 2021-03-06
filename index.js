const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const db=require('./config/keys');

const authRoutes=require('./routes/authRoutes');
const billingRoutes=require('./routes/billingRoutes');
const surveyRoutes=require('./routes/surveyRoutes');
require('./services/passport');
require('./models/Users');
require('./models/Survey');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [db.key]
}));

 app.use(passport.initialize());
 app.use(passport.session());

mongoose.connect(db.mongoURI,{
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    

    app.use(authRoutes);
    app.use(billingRoutes); 
    app.use(surveyRoutes);


if(process.env.NODE_ENV=='production'){
  app.use(express.static('client/build'));

  const path=require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}
    const PORT=process.env.PORT||5000;

    app.listen(PORT, () => {
        console.log(`app now listening for requests on port ${PORT}`);
    });