const express = require("express");

const {
    createVault
} = require("../controllers/vaultController");

const router = express.Router();

router.post("/create", createVault);

module.exports = router;