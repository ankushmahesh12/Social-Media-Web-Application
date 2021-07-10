const express=require('express');
const app=express();
const port=8000;
const expresslayouts=require('express-ejs-layouts');
app.use(express.static('./assets'))
app.use(expresslayouts);
app.set('layout extractStyles',true);
app.set('layout extractSripts',true);

//use express router
app.use('/', require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
//app.use('/',require('./routes/users_route'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port :${port}`);
    return ;
})