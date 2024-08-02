const { handleAdminLogin } = require("../controllers/admin");
const express = require("express");
const router = express.Router();

router.post("/login", handleAdminLogin);

module.exports = router;