
import "../styles/UserSignup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignup({ setUser }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const existingUser = JSON.parse(localStorage.getItem("user") || "{}");

        if (existingUser.name === name) {
            alert("User already exists. Please log in.");
            navigate("/login");
        } else {
            const newUser = { name, password };
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
            alert("Signup Successful! You can now log in.");
            navigate("/login");
        }
    };

    return (
        <div className="user-signup-container">
            <h2>User Signup</h2>
            <form onSubmit={handleSignup}>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />

                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default UserSignup;

// import "../styles/UserSignup.css";

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate

// function UserSignup({ setUser }) {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();  // ✅ Initialize navigation

//     const handleSignup = (e) => {
//         e.preventDefault();
//         const existingUser = JSON.parse(localStorage.getItem("user") || "{}");

//         if (existingUser.name === name) {
//             alert("User already exists. Please log in.");
//             navigate("/login"); // Redirect to login if user exists
//         } else {
//             const newUser = { name, password };
//             localStorage.setItem("user", JSON.stringify(newUser));
//             setUser(newUser);
//             alert("Signup Successful! You can now log in.");
//             navigate("/login"); // ✅ Navigate to Login Page
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2>User Signup</h2>
//             <form onSubmit={handleSignup}>
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Password</label>
//                     <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 </div>
//                 <button type="submit" className="btn btn-success">Signup</button>
//             </form>
//         </div>
//     );
// }

// export default UserSignup;






// import React, { useState } from "react";
// function UserSignup({ setUser }) {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
  
//     const handleSignup = (e) => {
//       e.preventDefault();
//       const newUser = { name, password };
//       localStorage.setItem("user", JSON.stringify(newUser));
//       setUser(newUser);
//       alert("Signup Successful! You can now log in.");
//     };
  
//     return (
//       <div className="container mt-4">
//         <h2>User Signup</h2>
//         <form onSubmit={handleSignup}>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//           <button type="submit" className="btn btn-success">Signup</button>
//         </form>
//       </div>
//     );
//   }
//   export default UserSignup