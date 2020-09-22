"use strict";
const express = require("express");
const UniRoutes = express.Router();
const auth = require('./managerAuth.js');


let Uni = require("../Models/uni.model");




//add products
UniRoutes.post('/add', auth, async (req, res) =>{

  const name = req.body.name;
 
  let newUni = new Uni({name});

  console.log("Uni is" , newUni);
  
  

  if(name=="" )   {           
        return res.status(200).json({warn:"Name is empty"});}

        const exist = await Uni.findOne({name:name})
       

  if(exist){
    return res.status(200).json({warn:"This University already Exist"})}

    

  await newUni.save().then(()=> res.json({msg:"Uni Added Successfully !"})).catch((err)=> {res.status(400).json({msg:"Error!"})

      console.log("Error is", err);
      
});

  



});

//delete product by ID
UniRoutes.delete('/delete/:id',auth,async (req, res) =>{

  await Uni.findByIdAndDelete(req.params.id).then(Entry => res.json('uni deleted'))
  .catch((err) => {res.status(400).json('Error: ' + err)

  console.log("Delete Error" , err);
  

});


});

//update product by id


//get all
UniRoutes.get("/",auth, async (req, res) =>{
  await Uni.find(function (err, Uni) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true, data: Uni});
    }
  }).sort({name:1});
});

//get pending


module.exports = UniRoutes