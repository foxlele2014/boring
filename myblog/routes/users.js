/*
* @Author: limin
* @Date:   2018-01-03 16:05:20
* @Last Modified by:   limin
* @Last Modified time: 2018-01-03 16:05:44
*/
const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
  res.send('hello, ' + req.params.name)
})

module.exports = router