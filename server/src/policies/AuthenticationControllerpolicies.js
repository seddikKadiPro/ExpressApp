const joi= require('joi')

module.exports={

    register(req,res,next){
        console.log('lolol')
        const schema={
            email:joi.string().email(),
            password: joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
           
        }
        const {error,value}= joi.validate(req.body,schema)

        if(error){

            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'you must provide valid email !! '
                    });          
                    break
                case 'password':
                    res.status(400).send({
                        error: 'you must provide valid password !! '
                    });
                break
                default:
                res.status(400).send({
                    error: 'invalid regestration data'
                })

            }

        }else{
            console.log('everything fine')
            next()
        }
    }
}