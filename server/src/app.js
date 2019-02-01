const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const app=express();
app.use(morgan('combine'));
app.use(bodyParser());
app.use(cors());
app.post('/register',(req,res)=>{

	res.send({

		message:`Hello ${req.body.email}!  your user is registred !!!`

	});
})
app.listen(process.PORT || 8081);