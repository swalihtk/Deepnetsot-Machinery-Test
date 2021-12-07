// moduels
const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config()
const cors=require("cors");

// controllers
const userController=require("./controllers/authController");
const productController=require("./controllers/productController");


// app
const app=express();
const PORT=8000 || process.env.PORT;

// middlewares
app.use(cors({
    origin:"*"
}))
app.use(express.json({}));
app.use(express.urlencoded({extended:true}))

// mongoose
mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err) console.log(err);
    console.log("Database Connected");
})


// routers
app.post("/login", userController.loginHelper)

app.post("/register",userController.signupHelper)

app.get("/list_all_products", productController.listAllProducts);

app.post("/create_new_prouct", productController.addNewProducts);

// listen
app.listen(PORT, ()=>console.log("Server started on port "+PORT))