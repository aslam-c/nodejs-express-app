const { MulterError } = require("multer");
const multer = require("multer")
const extensionMimeMappings={"png":"image/png", "jpg":"image/jpg","jpeg":"image/jpeg","pdf":"application/pdf"}
module.exports = {
    
    uploadMultipleFiles: (fileName,maxFileSize,allowedExtensions,uploadPath) => {
        //
    },
    uploadSingleFile: (fileName, maxFileSize, allowedExtensions=[],uploadPath) => {
       
            const storage = multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, uploadPath);
                },
                //set name for uploaded file
                filename: (req, file, cb) => {
                    const fileNameParts = file.originalname.split('.')
                    const fileExtension = fileNameParts[fileNameParts.length - 1]
                    cb(null, `${fileName}.${fileExtension}`)
                }
            })
            const fileFilter = (req, file, cb) => {
                //check file size type etc
                const mimeType = file.mimetype
                if (allowedExtensions.includes(mimeType)) {
                    cb(null, true)
                }
                else {
                    cb(null,false)
                }
            }
            return multer({ storage, fileFilter })
        }
    
}