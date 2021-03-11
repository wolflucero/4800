const router = require("express").Router();
const { createUser, getData } = require("./user.controller");
router.post("/register", createUser);
router.post("/data", getData);
module.exports = router;
