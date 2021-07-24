const express=require('express');

const router=express.Router();
const usercontroller=require('../controller/users_controller');
console.log("hlo");
router.get('/',usercontroller.profile);
router.get('/signup',usercontroller.signup);
router.get('/signin',usercontroller.signin);
router.post('/create',usercontroller.create);
module.exports=router;
