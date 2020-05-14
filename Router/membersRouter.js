const express =require('express')
const router = express.Router()
const Member = require('../Model/membersModel')


router.route('/').get(function(req,resp){
    Member.find({},function(err,mem){
        if(err){
            resp.send(err)
        }
        else{
            resp.json(mem)
        }
    })
})


////get members count for inserting once iside databse
router.route('/count').get(function(req,resp){
    Member.find({},function(err,mem){
        if(err){
            resp.send(err)
        }
        else{
            resp.json(mem.length)
        }
    })
})




module.exports = router
