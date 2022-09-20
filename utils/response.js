module.exports = {
    makeResponse: (message, data = {}, errors = {},statusCode,success=true) => {
            return { statusCode, message, data,errors, success }            

    }
}