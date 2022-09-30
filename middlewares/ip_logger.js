module.exports = {
    logIpAddress: (req, res, next) => {
        // req.user={auth:true}
        console.log("IP ADDRESS: " + req.ip)
        next()
    }
}