const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Recipients=require('./Recipients').schema;

const surveySchema=new Schema({
    title:String,
    body:String,
    subject:String,
    recipients:[Recipients],
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    _user:{type:Schema.Types.ObjectId,ref:'Users'},
    dateSent:Date,
    lastResponded:Date
});

module.exports= mongoose.model('surveys',surveySchema);