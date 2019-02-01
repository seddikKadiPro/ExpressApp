const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const app=express();
app.use(morgan('combine'));
app.use(bodyParser());
app.use(cors());
app.get('/home',(req,res)=>{

	res.send({

		message:'hello world !!!'

	});
})
app.listen(process.PORT || 8081);