const express = require ('express')

const router = express.Router()
const User = require('../model/userModel')

router.post('/register',(req,res)=>{
User.create(req.body)
.then(data=>res.json(data))
.catch(err=>res.status(500).json(err))
})
router.post('/newuser',(req,res)=>{
    const newUser = new User(req.body)
    newUser.save()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.get('/allusers',(req,res)=>{
    User.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.get('/user/:name',(req,res)=>{
    User.findOne({name:req.params.name})
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.get('/user/:userId',(req,res)=>{
    User.findById(req.params.userId,req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.put('/user/update/:userId',(req,res)=>{
    User.findByIdAndUpdate(req.params.userId,req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.delete('/user/delete/:userId',(req,res)=>{
    User.findByIdAndRemove(req.params.userId)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
router.get('/limit',(req,res)=>{
    const foodToSearch = "chappati";
    console.log('hiii')
    User.find()
    .sort({name : 1})
    .limit(2)
    .select("-age")
    .exec((err, data)=> {
        if(err){
        console.log(err)
        res.json({msg:'error'})
        }else{
            res.json(data)
        }})
    })




module.exports = router 