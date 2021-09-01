var express = require("express");
var router = express.Router();
var util = require("../util/util")

/* GET users listing. */
router.get("/", function (req, res, next) {
  const { query } = req;
  const signature = query.signature;
  const timestamp = query.timestamp;
  const nonce = query.nonce;
  const echostr = query.echostr;  

  const arr = [timestamp, nonce];
  const str = util.sha1(arr.sort().join(""));
  
  console.log("wx serve");
  res.render('index', { title: 'wx' });
});

router.get("/test",function(req, res){
  console.log('wx / test')
  res.render('index', { title: 'wx test' });
})

module.exports = router;
