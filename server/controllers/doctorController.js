const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.addDoctor = async (req, res) => {
  const { name, email, password, specialization } = req.body;
  try {
    let doctor = await Doctor.findOne({ email });
    if (doctor) return res.status(400).json({ msg: "Doctor already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    doctor = new Doctor({ name, email, password: hashedPassword, specialization });
    await doctor.save();
    res.status(201).json({ msg: "Doctor added" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.loginDoctor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: doctor._id, role: "doctor" }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
