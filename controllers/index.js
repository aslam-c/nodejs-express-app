const {validateRequest}= require("../requests/generateToken")
const { makeResponse } = require("../utils/response")
module.exports = {
    generateToken : (req, res, next) => {
        let httpStatusCode = 422
        let response = {}
        try {
            validateRequest(req.body)
            const token = "890290CV89"

            httpStatusCode=200
            response = makeResponse("Token generated successfully", { token }, {},httpStatusCode)
            res.status(httpStatusCode).json(response)
        }
        catch (error) {
            response = makeResponse("Token cant be generated", {}, error,httpStatusCode,false)
            res.status(httpStatusCode).json(response)
        }
    }
}