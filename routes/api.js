var express = require('express');
var router = express.Router();

const { getOil } = require("../httpReq/req1");

router.get('/', function (req, res, next) {
    res.send('api serve');
});


router.get('/getOil', async function (req, res, next) {
    let result;
    try {
        result = await getOil();
        res.send({ result });
    } catch (error) {
        console.log(error)
        res.send({ error: error })
    }
});


module.exports = router;
