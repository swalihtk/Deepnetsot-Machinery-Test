const Product=require("../model/product");

module.exports={

//@desc : List all producta
//@route : /list_all_products
//@access : private
    listAllProducts:async function(req,res){
        try{
            let products=await Product.find({});
            res.json(products);
        }catch(e){
            res.json({error:e.message});
        }
    },

//@desc : Add new product
//@route : /create_new_prouct
//@access : private
    addNewProducts:async function(req,res){
        try{
            let {name, price, quantity, category}=req.body;

            // check product name exist
            let existingProduct=await Product.findOne({name:name});

            if(!existingProduct){
                let newProduct=new Product({
                    name:name,
                    price:price,
                    quantity:quantity,
                    category:category
                })
                let save=await newProduct.save();
                res.status(200).json(save);
            }else{
                res.json({error:"Product name already exists"})
            }
        }catch(e){
            res.json({error:e.message});
        }
    }
}