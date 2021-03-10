const router = require("express").Router();
const { createUser } = require("./user.controller");
router.post("/register", createUser);
module.exports = router;
