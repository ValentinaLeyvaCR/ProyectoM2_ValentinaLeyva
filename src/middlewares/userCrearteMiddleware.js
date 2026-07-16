const userCreateMiddleware = (req, res, next) => {
    const { name, role } = req.body
    if (!name || !role) {
        return res.status(400).json({
            message: 'no se envio toda la informacion necesaria para crear el usuario, falta el name o el role'
        })

        if (role !== 'student') {
            return res.status(400).json({
                message: 'el role debe ser "student"'
            })
        }
    } next()
}

module.exports = {
    userCreateMiddleware
}