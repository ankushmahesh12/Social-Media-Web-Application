const User=require("../models/users");

module.exports.profile=function(req,res){
    return res.render('user',{
        title:'User'
    });
}
module.exports.signup=function(req,res){
    return res.render('user-signup',{
       title:"codeial |user" 
    })
};

module.exports.signin=function(req,res){
    return res.render('user-signin',{
       title:"codeial |user" 
    })
};

module.exports.create=function(req,res){
if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
}
User.findOne({email:req.body.email},function(err,user){
    if(err){
console.log("error is found",err);
return ;
    }
  //  console.log("user",user);
    if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log("error");
                return ;
            }
            return res.redirect('/user/signin');
        })
    }
    else
    {
        return res.redirect('back');
    }

})
};
module.exports.createsession=function(req,res){
return res.redirect('/');
};
module.exports.destroysession=function(req,res){
    req.logout();
    return res.redirect('/');
}