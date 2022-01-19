const express=require('express');
const router = express.Router();
const User = require('../modules/userModule');

// create User
router.post('/register',(req,res)=>{
    console.log(req.body)
    User.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
// show all User
router.get('/allUser',(req,res)=>{
    User.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

// delete User
router.delete('/:userId',(req,res)=>{
    User.findByIdAndDelete(req.params.userId, req.body)
    .then(data=>res.json(`${data.firstName}'s has been deleted`))
    .catch(err=>res.status(500).json(err))
})
// update User
router.put('/:userId',(req,res)=>{
    User.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
module.exports=router