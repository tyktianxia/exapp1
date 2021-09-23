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
    returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
  };
  var putPolicy = new qiniu.rs.PutPolicy(options);
  var uploadToken = putPolicy.uploadToken(mac);
  res.send({ code: "00000", token: uploadToken });
});

router.get("/getImageUrl", function (req, res, next) {
  let key = req.query.key;
  if(!key) {
    res.send({code:'11111',message:"key is undefined"})
  }
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  var config = new qiniu.conf.Config();
  var bucketManager = new qiniu.rs.BucketManager(mac, config);
  var BucketDomain = "http://qzu48ocy3.hd-bkt.clouddn.com";
  // 公开空间访问链接
  var DownloadUrl = bucketManager.publicDownloadUrl(BucketDomain, key);

  // var deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
  // var DownloadUrl = bucketManager.privateDownloadUrl(BucketDomain, key, deadline);
  // console.log(DownloadUrl);
  res.send({ code: "00000", image: DownloadUrl });
});

module.exports = router;
