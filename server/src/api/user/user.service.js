const pool = require("../../config/database");
module.exports = {
    create: (data, callBack) => {
        console.log(data)
        pool.query(
            `insert into Customer(firstName, lastName, phone, email) 
                values(?,?,?,?)`,
            [
                data.firstname,
                data.lastname,
                data.phone,
                data.email,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
};
