const express = require("express");
const router = express.Router();
const { handleUserSigninPost, handleUserLoginPost, handleUserUpdateGet, handleUserUpdatePost, handlePoliticianInfoUser, fetchSearchDetails } = require("../controllers/user");

router.post("/signin", handleUserSigninPost);
router.post("/login", handleUserLoginPost);
router.get("/update", handleUserUpdateGet);
router.post("/update", handleUserUpdatePost);
router.get("/obtain", handlePoliticianInfoUser);
router.post("/search", fetchSearchDetails);
module.exports = router;