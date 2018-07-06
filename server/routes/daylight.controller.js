const express = require('express');
const router = express.Router();
const Daylight = require('../model/daylight.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    Daylight.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const daylight = new Daylight({
        name:req.body.name
    })    
    daylight.save()
    .then(data => {
        res.json({status:true,message:'Daylight created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const daylight = {
            name:req.body.name
        };
        Daylight.findByIdAndUpdate(req.params.id,{$set:daylight},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'Daylight updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        Daylight.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'Daylight deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;