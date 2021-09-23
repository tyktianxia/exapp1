var express = require("express");
var qiniu = require("qiniu");
var router = express.Router();

var accessKey = "fCu6Vp7GV2qKD7h6dDXaVSmUWpbcz0Wm7qkH96KA";
var secretKey = "rxhfZl3GpuX1kxaKmoajnsuPqeOinLnp4_VT7APy";
var bucket = "yanzhiyu";

router.get("/", function (req, res, next) {
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  var options = {
    scope: bucket,
    // callbackUrl: 'http://api.example.com/qiniu/upload/callback',
    // callbackBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
  };
  var putPolicy = new qiniu.rs.PutPolicy(options);
  var uploadToken = putPolicy.uploadToken(mac);
  res.send({ code: "00000", token: uploadToken });
});

router.get("/getImageUrl", function (req, res, next) {
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  var config = new qiniu.conf.Config();
  var bucketManager = new qiniu.rs.BucketManager(mac, config);
  let key = '2021/09/23_16323761062351631671556(1).jpg'
  var privateBucketDomain  = "http://qzu48ocy3.hd-bkt.clouddn.com";
  // 公开空间访问链接
  // var publicDownloadUrl = bucketManager.publicDownloadUrl(
  //   publicBucketDomain,
  //   '2021/09/23_16323761062351631671556(1).jpg'
  // );
  
  var deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
  var privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
  console.log(privateDownloadUrl);
  res.send({ code: "00000", image: privateDownloadUrl });
});

module.exports = router;
