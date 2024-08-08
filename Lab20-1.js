//Demonstrate the use of middleware in Express.
const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded());

const student=[
    {   id:1,
        name:'John',
        age:20
    },
    {   id:2,
        name:'Jane',
        age:21
    },
    {   id:3,
        name:'Bob',
        age:19
    }
];

//getAllX
app.get('/student', (req, res) => {
    res.send(student);
});

//getXByID
app.get('/student/:id', (req, res) => {
    const ans=student.find((stu)=>{
        return stu.id==req.params.id;
    });
    res.send(ans);
});

//Create
app.post('/student', (req, res) => {
    student.push(req.body);
    res.send(student);
});

//Update
app.patch('/student/:id', (req, res) => {
    const indexofEdit=student.findIndex((stu)=>{
        return stu.id==req.params.id;
    });
        student[indexofEdit].name = req.body.name;
        student[indexofEdit].age = req.body.age;
        res.send(student);
});

//Delete
app.delete('/student/:id',(req,res)=>{
    const indexofDelete=student.findIndex((stu)=>{
        return stu.id==req.params.id;
    });
    student.splice(indexofDelete, 1);
    res.send(student);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});