import "../styles/AdminLogin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ setIsAdmin }) {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username === "admin" && formData.password === "admin123") {
            localStorage.setItem("adminToken", "loggedIn");
            setIsAdmin(true);
            alert("Login successful!");
            navigate("/admin-dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;






// import "../styles/AdminLogin.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminLogin({ setIsAdmin }) {  // ✅ Accept setIsAdmin as a prop
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.username === "admin" && formData.password === "admin123") {
//       localStorage.setItem("adminToken", "loggedIn");
//       setIsAdmin(true);  // ✅ Update state to show Admin Dashboard
//       alert("Login successful!");
//       navigate("/admin-dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Admin Login</h2>
//       <form className="mt-3" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input type="text" name="username" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" name="password" className="form-control" onChange={handleChange} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }

// export default AdminLogin;











