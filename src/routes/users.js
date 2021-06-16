var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const giovani = User.build({ name: "Giovani Murari", description: "Hi, my name is Giovani!" });
  const users = [giovani];
  res.send(users);
});

module.exports = router;
