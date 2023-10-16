class Response_Error extends Error {
    constructor(statusCode,message){
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default Response_Error