const express = require('express');
const router = express.Router();
const Clock = require('../model/clock.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    Clock.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const clock = new Clock({
        name:req.body.name
    })    
    clock.save()
    .then(data => {
        res.json({status:true,message:'Clock created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const clock = {
            name:req.body.name
        };
        Clock.findByIdAndUpdate(req.params.id,{$set:clock},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'Clock updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        Clock.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'Clock deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;