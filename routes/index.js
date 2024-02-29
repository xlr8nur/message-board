var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "hi there!",
    user: "Joe",
    added: new Date()
  },
  {
    text: "hey world!",
    user: "Samantha",
    added: new Date()
  }
];


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = {
  router, messages
};