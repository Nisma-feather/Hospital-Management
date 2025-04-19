const jwt=require("jsonwebtoken")
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
     console.log({email,password});
    if (email === "admin@gmail.com" && password === "admin@123") {
      console.log("matched")
      const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
      return res.json({ token });
    }
  
    return res.status(401).json({ msg: "Invalid admin credentials" });
  };
  