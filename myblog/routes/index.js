/*
* @Author: limin
* @Date:   2018-01-03 16:05:11
* @Last Modified by:   limin
* @Last Modified time: 2018-01-03 16:05:32
*/
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('hello, express')
})

module.exports = router