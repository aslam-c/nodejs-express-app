module.exports = {
    handle: (args) => {
        console.log("Auth event caught "+args['message'])
        return true
    }
}