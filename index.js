const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const TheSchemaTable = require("./models/TheSchemaTable");
require("dotenv").config();

const _portNumber = process.env.PORT || 3000;
const _PortString = `you can now access your web page using this link http://localhost:${_portNumber}`

const app = express();

mongoose.set("strictQuery",false);

const connectBD = async() =>{
try {
 const connect =  await mongoose.connect(process.env.URI);
 console.log(`Mongooose connected:${connect.connection.host}`);
} catch (error) {
    console.log(erre);
    process.exit(1);
}



}
mongoose.connect(process.env.URI)






app.set("view engine","ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended:false}));


app.get("/home",async(req,res)=>{
const FindAll = await TheSchemaTable.find({})
res.render("index",{FindAll});


});

connectBD().then(()=>{
    app.listen(_portNumber,(req,res)=>{

        console.log(_PortString);
        
        });
    
});
