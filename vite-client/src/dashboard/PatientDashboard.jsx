// src/pages/dashboard/PatientDashboard.jsx
import React from "react";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate("/")
    }
    return(
        <div style={{ padding: "2rem" }}>
        <h2>Patient Dashboard</h2>
        <button>Book Appointment</button>
        <button>View Appointment Status</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
}
    
  


export default PatientDashboard;
