const express= require('express')
// const Demo = require('../Controller/Demo')
const Array = require('../Controller/Array')
const router=express.Router()
router.route('/array').get(Array)

module.exports=router