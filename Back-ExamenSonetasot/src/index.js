const express = require("express");
const morgan=require("morgan");

const path=require('path');
const methodOverride=require('method-override');
//#region Initializations
const app=express();
//#endregion
//#region Settings
app.set('port',process.env.PORT || 4000);

//#endregion

//#region Midelware

app.use(morgan('dev'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//#endregion

//#region Global Variables
app.use((req,res,next)=>{
    next();
});
//#endregion

//#region Routes
app.use(require("./routes/index"));
//#endregion


//#region Public
    app.use(express.static(path.join(__dirname,'public')));
//#endregion

//#region Server
app.listen(app.get('port'),()=>{
    console.log("Server on Port",app.get('port'));
})
//#endregion