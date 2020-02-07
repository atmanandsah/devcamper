const express = require('express');
const router = express.Router();


router.get('/:id',(req,res)=>{
    res.status(200).json({success: true,msg: `get the bootcamps ${req.params.id}`});
});
router.post('/',(req,res) =>{
    res.status(200).json({success:true , msg :'create new bootcomps'});
});
router.put('/:id',(req,res) =>{
    res.status(200).json({success:true,msg:`put the new bootcamps ${req.params.id}`});
});
