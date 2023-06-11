require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    // host     : '35.240.253.26',
    // user     : 'admin',
    // password : '12qwaszx',
    // database : 'svbl_api'

    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
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