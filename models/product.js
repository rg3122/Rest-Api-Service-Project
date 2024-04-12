const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        // required: true,
    },
    price:{
        type:Number,
        // required: [true,"price must be provided"],
    },

    rating:{
        type:Number,
       // default: 4.9,
    },
    // createdAt:{
    //    // default:Date.now(),
        
    // },

    company:{
        type:String,
        enum: {
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`,
        },
    },
}) ;

module.exports=mongoose.model('Product',productSchema);

// name:"iphone",
//     price:154,
//     createdAt: date
//     rating: 4.8,
//     company:"apple",