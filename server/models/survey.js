let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    title: String,
    q1: String,
    q1o1: String,
    q1o2:String,
    q1o3:String,
    q1o4:String,
    q2: String,
    q2o1: String,
    q2o2:String,
    q2o3:String,
    q2o4:String,
    q3: String,
    q3o1: String,
    q3o2:String,
    q3o3:String,
    q3o4:String,
    q4: String,
    q4o1: String,
    q4o2:String,
    q4o3:String,
    q4o4:String,
    q5: String,
    q5o1: String,
    q5o2:String,
    q5o3:String,
    q5o4:String
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);