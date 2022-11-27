let express = require('express');
let router = express.Router();

let Survey = require('../models/survey');

module.exports.displayHomePage = (req, res, next) => {
    //res.render('home', {title: 'Home'});
    Survey.find((err, data) => {
        if(err)
        {
            console.error(err);
            res.end();
        }
        res.render('index', {title: 'Home', surveys: data});
    });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About'});
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products'});
}


module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact'});
}