const pool = require("../../config/database");
const { create } = require("./user.service");
module.exports = {
    createUser: (req, res) => {
        const body = req.body
        create(body, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.send({ messsage: 'User created' });
        });
    },
    getData: (req, res) => {
        console.log(req)
        pool.query('SELECT * FROM Customer', (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            }
            else {
                console.log(err);
            }
        })
    }
};
