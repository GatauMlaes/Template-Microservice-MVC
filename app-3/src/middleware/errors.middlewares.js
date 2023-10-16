import Response_Error from "../errors/errors.js";

const errors_middleware = async (error, req, res, next) => {
    if (!error) {
        next();
        return;
    }

    if (error instanceof Response_Error) {
        res.status(error.statusCode).json({ errors: error.message, statusCode: error.statusCode }).end();
    } else if (error.status === 404) {
        res.status(404).json({ errors: 'Halaman tidak ditemukan', statusCode: 404 }).end();
    } else {
        res.status(500).json({ errors: `Internal Server: ${error.message}`, statusCode: 500 });
    }
};

export default errors_middleware;
