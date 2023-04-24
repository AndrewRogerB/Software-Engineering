const db = require('../util/database');


module.exports = class Room {
    constructor(topic, creator, player, stance, timeO) {
        this.topic = topic;
        this.creator = creator;
        this.player = player;
        this.stance = stance;
        this.timeO = timeO;
    }

    static fetchAll() {
        return new Promise(async (resolve, reject) => {
            const connection = await db;
            let sql = `SELECT * FROM equals.rooms`;

            connection.query(sql, (err, rows) => {
                if (err){
                    reject(err)
                }else{
                    resolve(rows);
                }

            })
        })
    }

    static async findID(room){
        return new Promise(async (resolve, reject) => {
            const connection = await db;
            console.log("ID")
            let sql = `SELECT id FROM equals.rooms WHERE topic = "${room.topic}" and creator = "${room.creator}" and stance = "${room.stance}" and timeO = "${room.timeO}";`;

            connection.query(sql, (err, rows) => {
                if (err){
                    reject(err)
                }else{
                    resolve(rows);

                }
            })
        })
    }

    static async save(room) {
        const connection = await db;
        console.log("save")
        let sql = `INSERT INTO equals.rooms SET topic = "${room.topic}", creator = "${room.creator}", stance = "${room.stance}", timeO = "${room.timeO}";`;
        let query = connection.query(sql, (err) => {
            if (err) {
                throw err;
            }
        });
        return query;
    }

    static async delete(id) {
        const connection = await db;
        let sql = `DELETE FROM equals.rooms Where id = "${id}";`;
        let query = connection.query(sql, (err) => {
            if (err) {
                throw err;
            }
        });
        return query;
    }
};