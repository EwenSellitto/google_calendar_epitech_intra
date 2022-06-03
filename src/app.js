const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

// get routes
const check_auth = require('./middleware/auth')
const index_router = require('./routes/auth')
const not_found_router = require('./middleware/notFound')

// create express app and set logger
var app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Set routes
app.use('/', index_router)
app.use('*', not_found_router);

module.exports = app

// Create server
var app = require('./app')
var http = require('http')
var port = normalizePort(process.env.PORT || '3000')
app.set('port', port)
var server = http.createServer(app)

// Run server
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

// check port type and format it
function normalizePort(val)
{
    var port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }
    if (port >= 0) {
        return port
    }
    return false
}

// Handle errors
function onError(error)
{
    if (error.syscall !== 'listen') {
        throw error
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
    msg
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
        default:
            throw error
    }
}

// Listen to requests
function onListening()
{
    var addr = server.address()
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    console.log('Listening on ' + bind)
}
