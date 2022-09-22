const {validateRequest}= require("../requests/generateToken")
const { makeJsonResponse } = require("../utils/response")

module.exports = {
    generateToken : (req, res, next) => {
        let httpStatusCode = 422
        let response = {}
        try {
            validateRequest(req.body)
            const token = "890290CV89"

            httpStatusCode=200
            response = makeJsonResponse("Token generated successfully", { token }, {},httpStatusCode)
            res.status(httpStatusCode).json(response)
        }
        catch (error) {
            response = makeJsonResponse("Token cant be generated", {}, error,httpStatusCode,false)
            res.status(httpStatusCode).json(response)
        }
    },
    uploadFile: (req, res, next) => {
        let httpStatusCode=403
        let response = {}
        try {
            httpStatusCode=200
            response = makeJsonResponse("file uploaded successfully", {} , {},httpStatusCode)
            res.status(httpStatusCode).json(response)
        }
        catch (error) {
            console.log("Cant upload file")
            response = makeJsonResponse("File cant be uploaded", {}, error,httpStatusCode,false)
            res.status(httpStatusCode).json(response)
        }
    }
}