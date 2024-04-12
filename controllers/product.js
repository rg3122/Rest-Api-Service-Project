const product = require("../models/product");
const Product=require("../models/product");
const getAllProducts=async(req,res)=>{const 
    { company,name,sort,select}=req.query;
const queryObject ={};
        
    if(company){
        queryObject.company=company;
        
    }
    if(name){
        queryObject.name={ $regex : name, $options: "i"};
        
    }
let apiData=Product.find(queryObject);


    if(sort)
    {
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }
    if(select)
    {
        //let selectFix=select.replace(","," ");
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

let page= Number(req.query.page) || 1;
let limit=Number(req.query.limit) || 2;
let skip=(page-1)*limit;
apiData=apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const Products=await apiData;

    res.status(200).json({Products, nhibs:Products.length});
    };
    const getAllProductsTesting=async(req,res)=>{
        const myData=await Product.find(req.query).sort("company -price");
        
        console.log(
          "  ~file: product.js ~line 10 ~ getAllProductTesting ~ req.query",
        req.query

        );
        res.status(200).json({myData});
    };
    module.exports={getAllProducts,getAllProductsTesting};