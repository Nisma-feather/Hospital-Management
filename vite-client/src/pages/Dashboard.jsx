// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { getRole, logout } from "../utils/auth";
import PatientDashboard from "../dashboard/PatientDashboard";
import DoctorDashboard from "../dashboard/DoctorDashboard";
import AdminDashboard from "../dashboard/AdminDashboard";



const Dashboard = () => {
  const navigate = useNavigate();
  const role = getRole();

 
  if (role === "user") return <PatientDashboard/>;
  if (role === "doctor") return <DoctorDashboard />;
  if (role === "admin") return <AdminDashboard />;
  return <p>Unauthorized access</p>;

  
};

export default Dashboard;
