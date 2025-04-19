const express = require("express");
const router = express.Router();
const { addDoctor, loginDoctor } = require("../controllers/doctorController");
const auth = require("../middleware/authMiddleware");

router.post("/add", auth("admin"), addDoctor);
router.post("/login", loginDoctor);

module.exports = router;
