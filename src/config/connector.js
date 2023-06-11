const mysql = require('mysql');
const connection = mysql.createConnection({
    // host     : '35.240.253.26',
    // user     : 'admin',
    // password : '12qwaszx',
    // database : 'svbl_api'
    host     : '127.0.0.1',
    user     : 'root',
    password : '12qwaszx',
    database : 'svbl_api'
});

connection.connect(err => {
    if (err) {
        console.log('connection failure');
        throw err;
    } else {
        console.log('connection success');
    }
});

module.exports = { connection };