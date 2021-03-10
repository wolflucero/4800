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
    }
};
