const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const customers = require('./customers');

const connectionString="mongodb+srv://panaramalay:malaypanara@cluster0.vdhvm.mongodb.net/CoffeeShop";

mongoose.connect(connectionString).then(()=>{
    console.log("Connected to MongoDB");
});
const app=express();

app.use(bodyParser.urlencoded());

//getAllX
app.get('/customers',async(req,res)=>{
    const ans=await customers.find();
    res.send(ans);
});

//getByID
app.get('/customers/:CustomerID',async(req,res)=>{
    const ans=await customers.findOne({
        CustomerID:req.params.CustomerID
    });
    res.send(ans);
});

//create
app.post('/customers',async(req,res)=>{
    cust=new customers({...req.body});
    const ans=await cust.save();
    res.send(ans);
});

//update
app.patch('/customers/:CustomerID',async(req,res)=>{
    cust=await customers.findOne({
        CustomerID:req.params.CustomerID
    });
    cust.CustomerName=req.body.CustomerName;
    const ans=await cust.save();
    res.send(ans);
});

//delete
app.delete('/customers/:CustomerID',async(req,res)=>{
    const ans=await customers.deleteOne({
        CustomerID:req.params.CustomerID
    });
    res.send(ans);
})

app.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000');
});





// [
//     {
//         "_id": "66da95e8ff06fc521031ba79",
//         "CustomerID": 1,
//         "CustomerName": "John",
//         "OrderCategory": "Espresso",
//         "OrederName": "Coffee",
//         "TableNO": 5,
//         "PhoneNumber": 9999888877
//     },
//     {
//         "_id": "66da98dfc006da8964c2c3da",
//         "CustomerID": 2,
//         "CustomerName": "Malay",
//         "OrderCategory": "Cappuccino",
//         "TableNO": 6,
//         "PhoneNumber": 9998887776,
//         "__v": 0
//     }
// ]
