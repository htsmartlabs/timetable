const express = require('express');
const router = express.Router();
const Timeing = require('../model/timeing.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    Timeing.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const timeing = new Timeing({
        daylight_id:req.body.daylight_id,
        room_id:req.body.room_id,
        clock_id:req.body.clock_id
    })    
    timeing.save()
    .then(data => {
        res.json({status:true,message:'Timeing created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const timeing = {
            daylight_id:req.body.daylight_id,
            room_id:req.body.room_id,
            clock_id:req.body.clock_id
        };
        Timeing.findByIdAndUpdate(req.params.id,{$set:timeing},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'Timeing updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        Timeing.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'Timeing deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;