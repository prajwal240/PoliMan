const express = require('express');
const router = express.Router();
const { getPoliticianInfoAdmin, handleRemoveWork, handleAddWork, getUserInfoAdmin, handleRemoveUser, handleAdminSearch } = require("../controllers/politician")

router.get("/obtainwork", getPoliticianInfoAdmin);
router.post("/removework", handleRemoveWork);
router.get("/obtainusers", getUserInfoAdmin);
router.post("/search", handleAdminSearch);
router.post("/removeusers", handleRemoveUser);
router.post("/add", handleAddWork);

module.exports = router;