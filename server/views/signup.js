const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const SignupRouter = express.Router(); //a var called signupRouter is assigned express middlewares router fn (which handle with all routes)
SignupRouter.use(cors()); //to enable cross origin resourse sharing ie make post,get,etc request form different url
SignupRouter.use(bodyParser.urlencoded({ extended: true })); //to read the post request from html form
SignupRouter.use(express.json()); //to interpret json


// handle post request of signup page
SignupRouter.post("/", (req, res) => {
    const { Fname, Lname, email, phone, pass } = req.body;

    console.log("signup: ", Fname, Lname, email, phone, pass);

    //mongoose model
    const User = require('../schema/user.js');

    //creates a new user
    const user = new User({
        Fname: Fname,
        Lname: Lname,
        email: email,
        phone: phone,
        password: pass
    });

    user.save()
        .then(console.log("successfully saved to mongodb database: ", user))
        .catch((err) => { console.log(err) });

    res.send(req.body);
})


module.exports = SignupRouter;