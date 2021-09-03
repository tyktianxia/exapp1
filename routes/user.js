var express = require('express');
var router = express.Router();
var userDao = require("../dao/user")


router.get('/', async function(req, res, next) {
  const result = await userDao.getUser();
  res.send({result})
});

module.exports = router;
