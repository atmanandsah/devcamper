const express = require('express');
const dotenv = require('dotenv');

//routes files
const bootcamps = require('./routes/bootcamps');
//laod env vars
dotenv.config({path:'./config/config.env'});

const app = express();

//Mount routers
app.use('/api/v1/bootcamps',bootcamps);

// app.get('/api/v1/bootcamps', (req,res)=>{
//     //res.send('<h1>hello form express</h1>');
//     //if we have to send the json data then only send like this
//     //we dont have to do JSON.stringify
//     //res.send({name:'sonu'})
//     //another method
//     //res.json({name:'sonu'});
//     //res.sendStatus(400);
//     //res.status(200).send({success:true, data:{ id:1}  });
//     res.status(200).send({success:true, msg: 'get all bootcamps'})

// });


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);