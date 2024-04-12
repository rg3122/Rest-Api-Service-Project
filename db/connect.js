const mongoose=require("mongoose");

// uri=
// "mongodb+srv://apii:riyakgoyal1234@apii.dnbbf8z.mongodb.net/apii?retryWrites=true&w=majority&appName=apii";

const connectDB=(uri)=>{
    console.log("connected to db");
    return mongoose.connect(process.env.MONGODB_URL),{useUnifiedTopology: true};
    
};

module.exports=connectDB;