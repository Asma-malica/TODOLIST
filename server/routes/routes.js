const express = require('express')
const router = express.Router()

const Task = require('../models/models')

router.get('/',(req,res)=>{
   const task = new Task({
    todo : "MAke Ling",
    isComplete:false
   })
task.save((err,doc)=>
{
    if(err)console.log(err)
    console.log(doc)
})

})

module.exports = router