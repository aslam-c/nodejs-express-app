const {validateRequest}= require("../requests/generateToken")
module.exports = {
    generateToken : (req, res, next) => {
        try {
            const data = validateRequest(req.body)
            console.log("REQ BODY IS " + JSON.stringify(req.body))
            const token = "890290CV89"
            res.status(200).json({ msg: 'token generated successfully', token })
        }
        catch (error) {
            console.log("ERROR IS " + JSON.stringify(error))
            res.status(403).json({ msg: 'error generating token', error, status: 403 })
        }
    }
}