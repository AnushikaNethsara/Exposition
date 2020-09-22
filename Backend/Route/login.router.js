const express = require('express');
const loginRoutes = express.Router();
const bcrypt = require('bcrypt');
const session = require('express-session');
const auth = require('./managerAuth');
const config = require('../configure.js');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
var Mailgen = require('mailgen');



let login = require('../Models/login.model');


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




// add l

loginRoutes.post("/add", async (req, res) => {


    const {username ,password,email,role} = req.body;
    
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    if(username=="" ||password=="" ||email==""||role=="" )              
    return res.status(200).json({warn:"Important field(s) are empty"});


    
    const newLogin = new login({username,password:passwordHash,email,role});

  

  await newLogin.save().then(respond=> { 

    res.status(200).json({msg:"Successfull"});

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

    var email = {
        body: {
            name: 'There',
            intro: 'The Administrator of the Exposition Article Monitoring System has assigned a role to you as a <b>'+req.body.role+'</b>',
            table: {
                data: [
                    {
                        Username: req.body.username,
                        Password: req.body.password,
                        
                    }
                ],
                columns: {
                    // Optionally, customize the column widths
                    customWidth: {
                        Username: '20%',
                        Password: '15%'
                    },
                    // Optionally, change column text alignment
                    customAlignment: {
                        Password: 'right'
                    }
                }
            },
            action: {
                instructions: '<b>Use above Credentials to log in to your Account,</b><br/><br/>Please click log In button to Continue:',
                button: {
                    color: '#FB8C00', // Optional action button color
                    text: 'Log In',
                    link: 'http://localhost:3000/admin/login'
                }
            },
            outro: '<br><br/> <img src="https://res.cloudinary.com/fashionistaimage/image/upload/v1590686277/linkedinLabel_h9z45a.jpg"/> <br/>Need help, or have questions? <b>Just reply to this email</b>, we\'d love to help.'
        }
    };
     
    // Generate an HTML email with the provided contents
    var emailBody = mailGenerator.generate(email);
     
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

    
    


  mailOptions = {
    from: 'competition.exposition2020@gmail.com',
    to: req.body.email,
    subject: 'Exposition Role Assignment',
    html: emailBody
    
    // html: 'Exposition Administration has assigned you as a page <b>'+req.body.role+'</b><br><b>UserName : </b>'+req.body.username+'<br/><b>Password : </b>'+ req.body.password+'<br> Login to Dashboard of the Exposition Article Monitoring System from <a class="btn btn-success" href="http://localhost:3000/admin/login">here</a>. Please Bookmark your Log In Page for future refferences. <br> <br>Thank You, <br>Admin <br>Exposition Article Monitoring System ', // html body

}


sendMail(mailOptions);






}).catch((err)=> {res.status(400).json({msg:"Error!"})
        console.log("error:" , err);
                
});
  

       

});

//token validate





loginRoutes.post("/" ,async (req,res)=>{

    // console.log("Secret is :" , config.JWT_SECRET);

    try{
        const {username, password } = req.body;

        const Login = await login.findOne({username:username});

        if(username=="" ||password=="" )              
        return res.status(200).json({msg:"Username or Password fields are empty"});

        if(!Login)
        return res.status(200).json({msg:"Invalid Username"});


       


        const validate = await bcrypt.compare(password, Login.password);

        if(!validate)
        return res.status(200).json({msg:"Password is Invalid!"});

       
        //jwt secret
        const token = jwt.sign({id : Login._id}, config.JWT_SECRET,{expiresIn: 300});
        res.status(200).json({
            token,
            Login :{
                id: Login._id,
                username: Login.username,
                email : Login.email,
                role:Login.role
            


            },
        });


    }catch(err){
        res.status(400).json({msg:"Validation Error"});
        console.log("Error is " ,err);
    }

})


//Store Manager User Session Validation by token
loginRoutes.get("/session-validate" ,async (req,res)=>{

    try {

        const token = req.header('token');

        console.log("validation is :" , token);
        if(!token) return res.json(false);

        const validate = jwt.verify(token,config.JWT_SECRET);
        if(!validate) return res.json(false);

        const Login = await login.findById(validate.id);
        if(!Login) return res.json(false);

        return res.json(true);

        
    } catch (error) {
        res.status(400).json({msg:"Validation Error"});
        console.log("Error is " ,error);
        
    }



})

loginRoutes.delete('/delete/:id',auth,async (req, res) =>{

    await login.findByIdAndDelete(req.params.id).then(Entry => res.json('login deleted'))
    .catch((err) => {res.status(400).json('Error: ' + err)
  
    console.log("Delete Error" , err);
    
  
  });
  
  
  });




  loginRoutes.get("/admins",auth, async (req, res) =>{
    await login.find({role:"admin"},function (err, Logins) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ success: true, data: Logins});
      }
    }).sort({updatedAt:-1});
  });

  loginRoutes.get("/editors",auth, async (req, res) =>{
    await login.find({role:"editor"},function (err, Logins) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ success: true, data: Logins});
      }
    }).sort({updatedAt:-1});
  });

  loginRoutes.get("/viewers",auth, async (req, res) =>{
    await login.find({role:"viewer"},function (err, Logins) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ success: true, data: Logins});
      }
    }).sort({updatedAt:-1});
  });

  loginRoutes.get("/",auth, async (req, res) =>{
    await login.find(function (err, Logins) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ success: true, data: Logins});
      }
    }).sort({updatedAt:1});
  });




  


module.exports = loginRoutes;




