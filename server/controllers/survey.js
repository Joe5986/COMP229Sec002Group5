let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

let Survey = require('../models/survey');

module.exports.displaySurveysPage = (req, res, next) => {
    
    Survey.find((err, data) => {
        if(err)
        {
            console.error(err);
            res.end();
        }
        res.render('surveys', {title: 'Surveys', surveys: data});
    });  
}

module.exports.displayCreatePage = (req, res, next) => {
    res.render('create-edit', {title: 'Create Survey', surveys: '', buttonName: 'Create'});
}

module.exports.processCreatePage = (req, res, next) => {
    Survey.create({
        "title": req.body.surveyTitle,
        "q1":req.body.question1,
        "q1o1":req.body.q1choice1,
        "q1o2":req.body.q1choice2,
        "q1o3":req.body.q1choice3,
        "q1o4":req.body.q1choice4,
        "q2":req.body.question2,
        "q2o1":req.body.q2choice1,
        "q2o2":req.body.q2choice2,
        "q2o3":req.body.q2choice3,
        "q2o4":req.body.q2choice4,
        "q3":req.body.question3,
        "q3o1":req.body.q3choice1,
        "q3o2":req.body.q3choice2,
        "q3o3":req.body.q3choice3,
        "q3o4":req.body.q3choice4,
        "q4":req.body.question4,
        "q4o1":req.body.q4choice1,
        "q4o2":req.body.q4choice2,
        "q4o3":req.body.q4choice3,
        "q4o4":req.body.q4choice4,
        "q5":req.body.question5,
        "q5o1":req.body.q5choice1,
        "q5o2":req.body.q5choice2,
        "q5o3":req.body.q5choice3,
        "q5o4":req.body.q5choice4    
    },
    (err, survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/surveys');
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
          console.log(err);
          res.end();
        }
        res.render('create-edit', {title:'Edit Survey', surveys:surveyToEdit, buttonName: 'Edit'})
      });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    Survey.updateOne(
      {_id:id}, 
      {
        "_id": id,
        "title": req.body.surveyTitle,
        "q1":req.body.question1,
        "q1o1":req.body.q1choice1,
        "q1o2":req.body.q1choice2,
        "q1o3":req.body.q1choice3,
        "q1o4":req.body.q1choice4,
        "q2":req.body.question2,
        "q2o1":req.body.q2choice1,
        "q2o2":req.body.q2choice2,
        "q2o3":req.body.q2choice3,
        "q2o4":req.body.q2choice4,
        "q3":req.body.question3,
        "q3o1":req.body.q3choice1,
        "q3o2":req.body.q3choice2,
        "q3o3":req.body.q3choice3,
        "q3o4":req.body.q3choice4,
        "q4":req.body.question4,
        "q4o1":req.body.q4choice1,
        "q4o2":req.body.q4choice2,
        "q4o3":req.body.q4choice3,
        "q4o4":req.body.q4choice4,
        "q5":req.body.question5,
        "q5o1":req.body.q5choice1,
        "q5o2":req.body.q5choice2,
        "q5o3":req.body.q5choice3,
        "q5o4":req.body.q5choice4
      },
      (err) =>
      {
        console.log(err);
        res.end();
      });
      res.redirect('/surveys');
}

module.exports.processDeletePage = (req, res, next) => {
    let id = req.params.id;
    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/surveys');
    });
}

module.exports.displayParticipatePage = (req, res, next) => {
    let id = req.params.id;
    Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
          console.log(err);
          res.end();
        }
        res.render('participate', {title:'Participate', surveys:surveyToEdit})
      });
}

module.exports.processParticapatePage = (req, res, next) => {
    console.log({
        "Title": req.body.surveyTitle,
        "Question 1":req.body.question1,
        "Answer to Question 1":req.body.answerToQuestion1,
        "Question 2":req.body.question2,
        "Answer to Question 2":req.body.answerToQuestion2,
        "Question 3":req.body.question3,
        "Answer to Question 3":req.body.answerToQuestion3,
        "Question 4":req.body.question4,
        "Answer to Question 4":req.body.answerToQuestion4,
        "Question 5":req.body.question5,
        "Answer to Question 5":req.body.answerToQuestion5,
    });
    res.redirect('/home');
}
