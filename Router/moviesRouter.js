const Movie =require('./../Model/moviesModel')
const express = require('express')
const router = express.Router()

router.route('/').get(function(req,resp){
    Movie.find({},function(err,mov){
        if(err){
            return resp.send(err)
        }
        else{
            return resp.json(mov)
        }
    })
})


/////ROUTER FOR THE FIRST ACTIVATION OF PROJECT TO SEE THE AMOUNT OF MOVIES IN TABLE (IF EMPTY-FILL IN THE TABLE)
router.route('/count').get(function(req,resp){
    Movie.find({},function(err,mov){
        if(err){
            return resp.send(err)
        }
        else{
            return resp.json(mov.length)
        }
    })
})

router.route('/:id').get(function(req,resp){
    let id=req.params.id
    Movie.findById(id,function(err,mov){
        if(err){
            return resp.send(err)
        }
        else{
            return resp.json(mov)
        }
    })
})




module.exports = router