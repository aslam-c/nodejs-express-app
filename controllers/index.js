const {validateRequest}= require("../requests/generateToken")
const { makeJsonResponse } = require("../utils/response")
const {uploadSingleFile}=require("../utils/fileUploader")


const fileUploadParams = {
    fileName: "file1",
    fieldName: "image",
    allowedExtensions: ["image/png", "application/x-httpd-php"],
    uploadPath: "uploads"
}
let uploader=uploadSingleFile(fileUploadParams) 
    
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
        let httpStatusCode = 422
        let response = {}
        try {
                uploader(req, res, (err) => {
                    if (err) {
                        response = makeJsonResponse(err, {}, {}, httpStatusCode, false)
                        res.status(httpStatusCode).json(response)
                    }
                    else {
                        httpStatusCode = 200
                        response = makeJsonResponse("file uploaded successfully", {}, {}, httpStatusCode)
                        res.status(httpStatusCode).json(response)
                    }
                })
            

        }
        catch (error) {
            console.log("Cant upload file",JSON.stringify(error.stack));
            response = makeJsonResponse("File cant be uploaded", {}, error,httpStatusCode,false)
            res.status(httpStatusCode).json(response)
            }
    }
}