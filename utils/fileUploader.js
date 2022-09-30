const { MulterError } = require("multer");
const multer = require("multer")
const extensionMimeMappings={"png":"image/png", "jpg":"image/jpg","jpeg":"image/jpeg","pdf":"application/pdf"}
module.exports = {
    
    uploadMultipleFiles: (fileName,maxFileSize,allowedExtensions,uploadPath) => {
        //
    },
    uploadSingleFile: (uploadConf) => {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                    cb(null, uploadConf['uploadPath']);
                },
                //set name for uploaded file
            filename: (req, file, cb) => {
                    const fileNameParts = file.originalname.split('.')
                    const fileExtension = fileNameParts[fileNameParts.length - 1]
                    cb(null, `${uploadConf['fileName']}.${fileExtension}`)
                }
            })
            const fileFilter = (req, file, cb) => {
                //check file size type etc
                const mimeType = file.mimetype
                if (uploadConf['allowedExtensions'].includes(mimeType)) {
                    cb(null, true)
                }
                else {  
                    cb("File type not allowed",false);
                }
        }
            let multerInstance=multer({ storage:storage, fileFilter }).single(uploadConf['fieldName'])
            return multerInstance
    }
    
}