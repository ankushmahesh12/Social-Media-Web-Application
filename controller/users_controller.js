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

};
module.exports.createsession=function(req,res){

};