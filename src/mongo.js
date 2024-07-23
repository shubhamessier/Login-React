const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/react-login-tut")

.then(() =>{
    console.log("mongodb connected");
})

.catch(() => {
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        requried:true
    }
})



const collection = mongoose.model("collection, newSchema")