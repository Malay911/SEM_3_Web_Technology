const mongoose=require('mongoose');

const schema=mongoose.Schema({
    CustomerID:Number,
    CustomerName:String,
    OrderCategory:String,
    OrderName:String,
    TableNO:Number,
    PhoneNumber:Number
});

module.exports=mongoose.model("CoffeeShop",schema,"Customers");