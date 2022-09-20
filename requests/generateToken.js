const Joi= require('joi')
module.exports = {
    validateRequest: (reqBody) => {
        const schema = Joi.object({
            name: Joi.string().required() ,           
            email: Joi.string().email().required(),
        })
        const validationResult=schema.validate(reqBody,{abortEarly:false})    
        if (validationResult.error) {
            const firstValidationError=validationResult.error
            throw firstValidationError
        }
    }
}