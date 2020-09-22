"use strict";
const express = require("express");
const entryRoutes = express.Router();
const auth = require('./managerAuth.js');
var Mailgen = require('mailgen');
var nodemailer = require('nodemailer');


let Entry = require("../Models/entry.model");



function sendMail(mailOptions) {

  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'competition.exposition2020@gmail.com',
          pass: 'expo2020@)@)'
      }
  });


  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
  });
}




entryRoutes.get("/pending",auth, async (req, res) =>{
  await Entry.find({ status: 0 },function (err, Entry) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true, data: Entry});
    }
  }).sort({updatedAt:-1});
});


//get submited

entryRoutes.get("/completed",auth, async (req, res) =>{
  await Entry.find({ status: 1 },function (err, Entry) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true, data: Entry});
    }
  }).sort({updatedAt:-1});
});






//manager end point to get products by id
entryRoutes.get("/:id",auth,async (req, res) =>{
  let id = req.params.id;
  await Entry.findOne({ _id: id }, function (err, Entry) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true, data: Entry });
      console.log("Passed product is", Entry);
      
    }
  });
});








      


//add products
entryRoutes.post('/add', async (req, res) =>{

  const nic = req.body.nic;
  const fullname = req.body.fullname;
  const nameI = req.body.nameI;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const uni = req.body.uni;
  const dept = req.body.dept;
  const year = req.body.year;
  const fac = req.body.fac;

 
  

  const status = 0;

  let newEntry = new Entry({nic,fullname,nameI,email,mobile,uni,dept,year,status,fac});

  console.log("entry is" , newEntry);
  
  

  if(nic=="" ||fullname=="" ||nameI=="" ||email=="" ||mobile=="" ||uni=="" ||dept=="" ||year==""||fac=="" )   {           
        return res.status(200).json({warn:"Important field(s) are empty"});}

        const exNic = await Entry.findOne({nic:nic})
        const exEmail = await Entry.findOne({email:email})

  if(exNic){
    return res.status(200).json({warn:"There Exist an Article Registration with the given NIC number !"})}

    if(exEmail){
    return res.status(200).json({warn:"There Exist an Article Registration with the given Email !"})}


  

  

  await newEntry.save().then(response=> {




  var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'Exposition',
        link: 'https://exposition.imssa.lk/',
        // Optional product logo
         logo: 'https://res.cloudinary.com/fashionistaimage/image/upload/v1590686013/expologo_xoqled.png'
    }
});

var emailHTML = {
    body: {
        name: nameI ,
        intro: 'Thank you for registering to the <b>Exposition Inter University Article Competition.</b> This is to inform you about your registration details. Below are the registration details for your entry to the competition. <br><h2> Registration ID is : <b>'+newEntry._id+"</b></h2>",
        table: [
          {
              // Optionally, add a title to each table.
              title: 'Personal Details',
              data: [
                  {
                    "NIC": nic,
                      "Full Name": fullname,
                      "Name with Initials": nameI,
                      
                  }
              ],
              
          },
          {
              // Optionally, add a title to each table.
              title: 'Academic Details',
              data: [
                  {
                      "University": uni,
                      "Faculty": fac,
                      "Department": dept
                  },
                 
              ],
              
          },
          {
            // Optionally, add a title to each table.
            title: 'Contact Details',
            data: [
                {
                    "Mobile Number": mobile,
                    "Email": email,
                    
                },
               
            ],
            
        }
      ],
        action: {
            instructions: '<b>Please Make sure above details are Correct.</b><br/><br/>If you have any Inquery please contact us through <b>competition.exposition2020@gmail.com</b>',
            button: {
                color: '', // Optional action button color
                text: '',
                link: ''
            }
        },
        outro: '<br><br/> <img src="https://res.cloudinary.com/fashionistaimage/image/upload/v1590692703/linkedinLabelmagazine_nxpj6y.jpg"/> <br/>'
    }
};
 
// Generate an HTML email with the provided contents
var emailBody = mailGenerator.generate(emailHTML);
 
// Generate the plaintext version of the e-mail (for clients that do not support HTML)
// var emailText = mailGenerator.generatePlaintext(email);
 
// // Optionally, preview the generated HTML e-mail by writing it to a local file
// require('fs').writeFileSync('preview.html', emailBody, 'utf8');
 
// `emailBody` now contains the HTML body,
// and `emailText` contains the textual version.
//
// It's up to you to send the e-mail.
// Check out nodemailer to accomplish this:
// https://nodemailer.com/





let mailOptions = {
from: 'competition.exposition2020@gmail.com',
to: email,
subject: 'Exposition Inter-University Article Competition',
html: emailBody

// html: 'Exposition Administration has assigned you as a page <b>'+req.body.role+'</b><br><b>UserName : </b>'+req.body.username+'<br/><b>Password : </b>'+ req.body.password+'<br> Login to Dashboard of the Exposition Article Monitoring System from <a class="btn btn-success" href="http://localhost:3000/admin/login">here</a>. Please Bookmark your Log In Page for future refferences. <br> <br>Thank You, <br>Admin <br>Exposition Article Monitoring System ', // html body

}



sendMail(mailOptions);




res.json({response})



}).catch((err)=> {res.status(400).json({msg:"Error!"})

      console.log("Error is", err);
      
});

  



});



entryRoutes.get("/customOrder/asc",auth, async (req, res) =>{
  await Entry.find(function (err, Entry) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true, data: Entry});
    }
  }).sort({createdAt:1});
});

//delete product by ID
entryRoutes.delete('/delete/:id',auth,async (req, res) =>{

  await Entry.findByIdAndDelete(req.params.id).then(Entry => res.json('products deleted'))
  .catch((err) => {res.status(400).json('Error: ' + err)

  console.log("Delete Error" , err);
  

});


});

//update product by id

entryRoutes.post('/update/:id' , auth,async (req, res) =>{

  Entry.findById(req.params.id).then(

    EntryObj=>{
      EntryObj.nic = req.body.nic;
      EntryObj.fullname = req.body.fullname;
      EntryObj.nameI = req.body.nameI;
      EntryObj.email = req.body.email;
      EntryObj.mobile = req.body.mobile;
      EntryObj.uni = req.body.uni;
      EntryObj.dept = req.body.dept;
      EntryObj.year = req.body.year;
      EntryObj.fac = req.body.fac;
      
    

        EntryObj.save().then(()=> res.json('Updated')).catch(err => res.status(400).json('Erro ' + err));

      }

  ).catch(err => res.status(400).json('Error ' + err));


});

entryRoutes.get('/mark/:id',auth,async (req, res) =>{

  Entry.findById(req.params.id).then(

    EntryObj=>{
     
      EntryObj.status = 1;
      
    

        EntryObj.save().then(()=> res.json('Marked')).catch(err => res.status(400).json('Erro ' + err));

      }

  ).catch((err) => {res.status(400).json('Error ' + err)

  console.log("mark Error is," , err);}
  
  
  
  );



});

entryRoutes.get("/byUni/:key",auth, async (req, res) =>{

  let key = req.params.key;
  await Entry.find({ uni: key },function (err, Entry) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true, data: Entry});
    }
  }).sort({updatedAt:-1});
});

entryRoutes.get("/byDate/:date",function (req, res) {
  let date = req.params.date;
  
  
 
  Entry.find({ "createdAt": { $lt: date }}, function (err, Entry) {
    if (err) {
      console.log(err);
    } else {

      console.log("Passed data by dates",date," DAta", Entry);
      
      res.status(200).json({ success: true, data: Entry });
    }
  })
});




//get all
entryRoutes.get("/",auth, async (req, res) =>{
  await Entry.find(function (err, Entry) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true, data: Entry});
    }
  }).sort({updatedAt:-1});
});




//get pending


module.exports = entryRoutes