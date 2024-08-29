const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Product = require('./product');

const connectionString = "mongodb+srv://panaramalay:malaypanara@cluster0.vdhvm.mongodb.net/product";

mongoose.connect(connectionString).then(()=>{
    console.log('Connected with cloud database');
    const app = express();

    app.use(bodyParser.urlencoded());

    //get All
    app.get('/products',async (req,res)=>{
        const ans = await Product.find();
        res.send(ans);
    });

    //getbyID
    app.get('/products/:id',async (req,res)=>{
        const ans = await Product.findOne({
            id:req.params.id
        });
        res.send(ans);
    });

    //create 
    app.post('/products',async (req,res)=>{
        stu = new Product({...req.body});
        const ans = await stu.save();
        res.send(ans);
    });

    //delete
    app.delete('/products/:id',async (req,res)=>{
        const ans = await Product.deleteOne({
            id:req.params.id
        });
        res.send(ans);
    });

    //update
    app.patch('/products/:id',async (req,res)=>{
        stu = await Product.findOne({id:req.params.id});

        stu.name = req.body.name;
        
        const ans = await stu.save();
        res.send(ans);
    });

    //search
    app.get('/products/search/:text',async (req,res)=>{
        const ans = await Product.find({name:{$regex:req.params.text}});

        res.send(ans);
    });

    
    app.listen(3000,()=>{
        console.log("Server strated @ 3000");
    });
});
