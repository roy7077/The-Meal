const express=require('express');
const router=express.Router();

const {SignUp}=require('../Controllers/Auth');
const {Login}=require('../Controllers/Auth');


router.post('/signup',SignUp);
router.post('/login',Login);

module.exports=router;