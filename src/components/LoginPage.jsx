import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = ({ setUser, setIsAdmin }) => {
  const [activeTab, setActiveTab] = useState("login"); // Default is user login
  const [formData, setFormData] = useState({ name: "", phone: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (activeTab === "admin") {
      if (formData.name === "admin" && formData.password === "admin123") {
        localStorage.setItem("adminToken", "loggedIn");
        setIsAdmin(true);
        alert("Admin logged in successfully");
      } else {
        alert("Invalid Admin Credentials");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      setUser(formData);
      alert("User logged in successfully");
    }
  };

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setUser(formData);
    alert("User signed up successfully");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Event Management Login</h2>
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => setActiveTab("login")}>User Login</button>
        <button className="btn btn-success mx-2" onClick={() => setActiveTab("signup")}>User Signup</button>
        <button className="btn btn-danger mx-2" onClick={() => setActiveTab("admin")}>Admin Login</button>
      </div>

      <div className="card p-4">
        {activeTab !== "admin" && (
          <input type="text" name="name" placeholder="Name" className="form-control mb-3" onChange={handleChange} />
        )}
        {activeTab === "signup" && (
          <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-3" onChange={handleChange} />
        )}
        <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} />
        <button className="btn btn-primary w-100" onClick={activeTab === "signup" ? handleSignup : handleLogin}>
          {activeTab === "signup" ? "Signup" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
