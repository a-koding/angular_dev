
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose =require('./db.js');
var createusersController = require('./controller/createusers');
var employeeController = require('./controller/employeeController');
var usersController = require('./controller/usersController');
var login_authController = require('./controller/login_auth');
var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.listen(3000,()=>console.log('server started at 3000'));
app.use('/employees',employeeController);
app.use('/users',usersController);
app.use('/createusers',createusersController);
app.use('/login_auth',login_authController);



//ashok commited