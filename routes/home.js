var express=require('express');
var router=express.Router();

router.get('/',(req,res,next)=>{
res.render('home',{title:'home'});
});
module.exports=router;