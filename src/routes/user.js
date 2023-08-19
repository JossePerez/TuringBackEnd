const express = require("express");

const router = express.Router();

// Crear usuario
router.post("/users", (req, res) => {
    res.send("Crear user");
});

module.exports = router;
