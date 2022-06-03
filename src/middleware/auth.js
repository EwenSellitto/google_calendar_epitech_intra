const jwt = require('jsonwebtoken')

function check_auth(req, res, next)
{
    var decoded
    var token

    try {
        token = req.headers.authorization.split(' ')[1]
        decoded = jwt.verify(token, process.env.SECRET)
        req.userData = decoded
        module.exports.userData = decoded
        next()
    } catch(error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).send({
                "msg": "Token is not valid"
            })
        } else {
            return res.status(401).send({
                "msg" : "No token , authorization denied"
            })
        }
    }
}

function create_token(data)
{
    var signature = jwt.sign(data, process.env.SECRET, { expiresIn : '1h' })
    return signature
}

module.exports = {
    checkAuth: check_auth,
    create_token: create_token
}
