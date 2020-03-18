const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/edureka",{useNewUrlParser:true},(error)=>{
    if(!error)
        {
            console.log("success connected");
        }   
    else
        {
            console.log("error connecting to database");
        }
    });

    const Course=require("./courses.models");