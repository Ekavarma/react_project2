
import "../styles/UserLogin.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin({ setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
      setUser(storedUser);
    }
  }, [setUser]);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.name === name && storedUser.password === password) {
      setUser(storedUser);
      setLoggedInUser(storedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      alert("Login Successful!");
      navigate("/booking");
    } else {
      alert("Wrong credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <div className="user-login-container">
      <h2>{loggedInUser ? `Welcome, ${loggedInUser.name}!` : "User Login"}</h2>

      {!loggedInUser ? (
        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>
      ) : (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      )}
    </div>
  );
}

export default UserLogin;

// import "../styles/UserLogin.css";

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function UserLogin({ setUser }) {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const navigate = useNavigate();

//   // Check if user is already logged in
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (storedUser) {
//       setLoggedInUser(storedUser);
//       setUser(storedUser);
//     }
//   }, [setUser]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//     if (storedUser && storedUser.name === name && storedUser.password === password) {
//       setUser(storedUser);
//       setLoggedInUser(storedUser);
//       localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Store session
//       alert("Login Successful!");
//       navigate("/booking"); // Redirect to Booking page
//     } else {
//       alert("Wrong credentials");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser"); // Clear session
//     setUser(null);
//     setLoggedInUser(null);
//     navigate("/"); // Redirect to Main Page
//   };

//   return (
//     <div className="container mt-4">
//       <h2>{loggedInUser ? `Welcome, ${loggedInUser.name}!` : "User Login"}</h2>

//       {!loggedInUser ? (
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </form>
//       ) : (
//         <button onClick={handleLogout} className="btn btn-danger mt-3">
//           Logout
//         </button>
//       )}
//     </div>
//   );
// }

// export default UserLogin;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function UserLogin({ setUser }) {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Initialize navigation

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//     if (storedUser && storedUser.name === name && storedUser.password === password) {
//       setUser(storedUser);
//       localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Store session
//       alert("Login Successful!");
//       navigate("/booking"); // Redirect to Booking page
//     } else {
//       alert("Wrong credentials");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>User Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default UserLogin;


