var exports=require('express');
const router = require("express").Router();
const { Validation } = require('../middleware/vadilation');
const Schema = require('../Schema');
const auth = require('../middleware/auth');
const {logout} = require('../services/logout');
const{createdSession}=require('../services/uti');
const {login}= require('../services/login');

router.post('/login',auth.Signout, Validation(Schema.loginSchema), async(req, res) => {
    const { email, password } = req.body;
    const user = await login(email,password);
    const token=createdSession(user?._id, user?.email);
    req.session = token;
    res.json(user);
})

router.post('/logout', auth.Signin, async(req, res, next) => {
    //delete Cookie
    await logout()
})


router.post('/register', auth.Signin, Validation(Schema.registerSchema), async(req, res, next) => {
    const createUser = await register(req.body);
    res.json(createUser);
})

module.exports = router;