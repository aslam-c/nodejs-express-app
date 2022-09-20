const Joi= require('joi')
module.exports = {
    validateRequest: (reqBody) => {
        const schema = Joi.object({
            name: Joi.string().required() ,           
            email: Joi.string().email().required(),
            tries:Joi.number().min(1).max(100).required()
        })
        const validationResult=schema.validate(reqBody,{abortEarly:false})    
        if (validationResult.error) {
            console.log("VALIDATION ERRORS ARE "+validationResult.error)    
            const errorDetails= validationResult.error.details
            let validationMessages=[]
            for (const detail of errorDetails) {
                const fieldName = detail?.context?.label                
                let message = detail?.message?.replaceAll(/"/g,'')
                validationMessages.push([{ [fieldName]: message }]) 
            }
            throw validationMessages

        }
    }
}