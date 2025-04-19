import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", address: "", phone: "", country: "", idProof: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered successfully!");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Patient Register</h2>
      {["name", "email", "password", "address", "phone", "country", "idProof"].map((field) => (
        <input key={field} name={field} placeholder={field} value={form[field]} onChange={handleChange} required />
      ))}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
