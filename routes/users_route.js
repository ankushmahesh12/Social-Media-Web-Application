const express=require('express');

const router=express.Router();
const user=require('../controller/users_controller');
console.log("hlo");
router.get('/',user.profile);

module.exports=router;
