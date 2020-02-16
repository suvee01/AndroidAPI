const express = require('express');
const Product = require('../models/product');

const router = express.Router();
router.route('/')

.get((req,res,next)=>{
    Product.find({})
    .then((product)=>{
        status=200;
        res.json(product);

    })
    .catch((err)=>next(err));

})

.post((req,res,next)=>{
    Product.create(req.body)
    .then((product)=>{
        res.status=200;
        res.json(product);
    })
    .catch((err) => next(err));



})
 
.put((req,res,next)=>{
    res.statusCode=201;
    res.json("You cannot update product");

})

.delete((req,res,next)=>{
    Product.deleteMany({})
    .then((product)=>{
        res.json(product);

    })
});


 router.route('/:id')
  .get((req,res,next)=>{
    Product.findById(req.params.id)
     .then((product)=>{
        res.json(product);
     })
     .catch((err) => next(err));
 })

 .post((req,res,next)=>{
     res.statusCode=201;
     res.json("You cannot add product again on here");
 })


 .put((req,res,next)=>{
    Product.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
     .then((product)=>{
         res.json(product);

     })
     .catch((err)=> next(err));
 })



 .delete((req,res,next)=>{
    Product.findByIdAndDelete(req.params.id)
     .then((product)=>{
         res.json(product);
     })
     .catch((err)=> next(err));
 })

module.exports= router;


