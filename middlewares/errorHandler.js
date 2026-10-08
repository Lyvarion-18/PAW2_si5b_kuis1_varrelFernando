function errorHandler(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            status: "error",
            message: "Format JSON tidak valid",
            data: null
        });
    }

    const status = err.status || 500;

    res.status(status).json({
        status: "error",
        message: err.message || "Terjadi kesalahan pada server",
        data: null
    });
}

module.exports = errorHandler;