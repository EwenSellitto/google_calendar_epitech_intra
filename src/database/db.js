const mysql = require('mysql2')
require('dotenv').config()

// connect to the database
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

// check if connection is successful
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    } else {
        console.log('connected as id ' + connection.threadId)
    }
})

// check connection end
var end_connection = null

module.exports = {
    connection
}
