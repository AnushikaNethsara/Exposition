// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 443 || 8080;
const cors = require('cors');
const session = require('express-session');
const fileupload = require('express-fileupload');

const mongoose = require('mongoose');

const config = require('./configure.js');


const loginRoute    = require('./Route/login.router');
const entryRoute = require("./Route/entry.router");
const uniRoute = require("./Route/uni.router");

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileupload({
   useTempFiles:true
}));


app.use('/login', loginRoute);
app.use("/registration", entryRoute);
app.use("/university", uniRoute);


app.use(session({
  secret: 'kjcxlchiy48236',
  resave: false,
  saveUninitialized: false
}));

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
