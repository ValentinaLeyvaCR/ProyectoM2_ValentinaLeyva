// RESPONSABILIDAD DEL MIDDLEWARE:
// Validar la información antes de llegar al controller.

const authorCreateMiddleware = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || name.trim() === "" || !email) {
    return res.status(400).json({
        message: "Falta información para crear el autor."
    });
}
    if (!email || email.trim() === "") {
        return res.status(400).json({
            message: "El email es obligatorio."
        });
    }
    next();
};

module.exports = {
    authorCreateMiddleware
};