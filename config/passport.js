const passport= require('passport');
const localstrategy=require('passport-local').Strategy;
const User=require('../models/users');

passport.use(new localstrategy({
    usernameField:'email'
},
function(email,password,done){
    User.findOne({email:email}, function(err,user){
        if(err){
            console.log('Error in finding the passport');
            return done(err);

        }
        if(!user || user.password != password){
            console.log('invalid user or password is incorrect');
            return done(null,false);
        }
        return done(null,user);
    })
}
))

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/user/signin');
}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user
    }
    next();
}

  module.exports=passport;