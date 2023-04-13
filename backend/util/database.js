const mysql = require('mysql8');
const config = require('../config/config.json');

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
});

const poolPromise = new Promise((resolve, reject) => {
    // Get a connection from the pool
    pool.getConnection((err, connection) => {
        if (err) {
            // Reject the promise if there's an error
            reject(err);
        } else {
            // Resolve the promise with the connection if successful
            resolve(connection);
        }
    });
});

module.exports = poolPromise;