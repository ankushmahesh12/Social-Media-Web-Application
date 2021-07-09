const express=require('express');

const router=express.Router();
const home_Controller=require('../controller/home_controller');

console.log("router");
router.get('/', home_Controller.home);


module.exports=router;