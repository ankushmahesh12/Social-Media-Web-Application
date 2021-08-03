const express=require('express');

const router=express.Router();
const passport=require('passport');
const usercontroller=require('../controller/users_controller');
console.log("hlo");
router.get('/',passport.checkAuthentication,usercontroller.profile);
router.get('/signup',usercontroller.signup);
router.get('/signin',usercontroller.signin);
router.post('/create',usercontroller.create);
router.post('/createsession',passport.authenticate(
    'local',
    {failureRedirect: '/user/signin' }
),usercontroller.createsession);
module.exports=router;
