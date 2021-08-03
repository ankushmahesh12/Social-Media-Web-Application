const express=require('express');
const cookieparser=require('cookie-parser');
const app=express();
const port=8000;
const expresslayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

const session=require('express-session');
const passport=require('passport');
const passportlocal=require('./config/passport');
const MongoStore=require('connect-mongodb-session')(session);

app.use(express.urlencoded());
app.use(cookieparser());
app.use(express.static('./assets'))
app.use(expresslayouts);
app.set('layout extractStyles',true);
app.set('layout extractSripts',true);

//use express router

app.set('view engine','ejs');
app.set('views','./views');
//app.use('/',require('./routes/users_route'));



app.use(session({
    name:'codeial',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: new MongoStore(
        {   
            mongooseConnection:db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connected to passport');
        }
    )
    
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port :${port}`);
    return ;
})