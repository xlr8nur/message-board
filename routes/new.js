var express = require('express');
var router = express.Router();
const {messages} = require('./index')

router.get('/', function(req, res, next) {
  res.render('form', {title: 'New Message'});
});

router.post('/', function(req, res, next) {
  messages.push({text: req.body.message, 
    author: req.body.name, 
    added: new Date()});
  res.redirect('/');
});

module.exports = router;