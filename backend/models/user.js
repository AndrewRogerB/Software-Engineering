const db = require('../util/database');

module.exports = class User {
    constructor(name, email, password, phone) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }


    static async find(email){
        return new Promise(async (resolve, reject) => {
            const connection = await db;
            let sql = `SELECT * FROM equals.users WHERE email = "${email}"`;

            connection.query(sql, (err, rows) => {
                if (err){
                    reject(err)
                }else{
                    resolve(rows);
                }
            })
        })
    }

    static async findName(name){
        return new Promise(async (resolve, reject) => {
            const connection = await db;
            let sql = `SELECT * FROM equals.users WHERE name = "${name}"`;

            connection.query(sql, (err, rows) => {
                if (err){
                    reject(err)
                }else{
                    resolve(rows);
                }
            })
        })
    }

    static async findPhone(phone){
        return new Promise(async (resolve, reject) => {
            const connection = await db;
            let sql = `SELECT * FROM equals.users WHERE phone = "${phone}"`;

            connection.query(sql, (err, rows) => {
                if (err){
                    reject(err)
                }else{
                    resolve(rows);
                }
            })
        })
    }





    static async save(user){
        const connection = await db;
        let sql = `INSERT INTO equals.users SET name = "${user.name}", email = "${user.email}", password = "${user.password}", phone = "${user.phone}";`;
        let query = connection.query(sql, (err) => {
            if (err) {
                throw err;
            }
        });
        return query;
    }
};
