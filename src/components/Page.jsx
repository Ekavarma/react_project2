
import React, { useState } from "react";
import UserLogin from "../pages/UserLogin";
import AdminLogin from "../pages/AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSignup from "../pages/Usersignup";
// import "../styles/page.css"
const AuthPage = () => {
  const [activePage, setActivePage] = useState("image");
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Welcome to Our Platform</h2>
      
      <div className="btn-group mb-4" role="group">
        <button className="btn btn-primary" onClick={() => setActivePage("login")}>
          User Login
        </button>
        <button className="btn btn-success" onClick={() => setActivePage("signup")}>
          Signup
        </button>
        <button className="btn btn-danger" onClick={() => setActivePage("admin")}>
          Admin Login
        </button>
      </div>
      
      <div className="border p-4 rounded shadow-sm bg-light">
        {activePage === "image" && (
          <img
            src="https://img.freepik.com/premium-photo/high-angle-view-information-sign-table_1048944-25300360.jpg?w=996"
            alt="Information Sign"
            className="img-fluid"
          />
        )}
        {activePage === "login" && <UserLogin setUser={setUser} />}
        {activePage === "signup" && <UserSignup setUser={setUser} />}
        {activePage === "admin" && <AdminLogin setIsAdmin={setIsAdmin} />}
      </div>
    </div>
  );
};

export default AuthPage;





// import React, { useState } from "react";
// import UserLogin from "../pages/UserLogin";
// import UserSignup from "../pages/Usersignup";
// import AdminLogin from "../pages/AdminLogin";
// // import AdminLogin from "../pages/AdminLogin";
// // import UserLogin from "../pages/UserLogin";
// // import UserSignup from "../pages/Usersignup";

// const AuthPage = () => {
//   const [activePage, setActivePage] = useState("image");
//   const [user, setUser] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Welcome to Our Platform</h2>

//       <button onClick={() => setActivePage("login")} style={buttonStyle}>
//         User Login
//       </button>
//       <button onClick={() => setActivePage("signup")} style={buttonStyle}>
//         Signup
//       </button>
//       <button onClick={() => setActivePage("admin")} style={buttonStyle}>
//         Admin Login
//       </button>
      
//       <div style={contentStyle}>
//         {activePage === "image" && (
//           <img
//             src="https://img.freepik.com/premium-photo/high-angle-view-information-sign-table_1048944-25300360.jpg?w=996"
//             alt="Information Sign"
//             style={{ width: "100%", maxWidth: "600px", height: "auto" }}
//           />
//         )}
//         {activePage === "login" && <UserLogin setUser={setUser} />}
//         {activePage === "signup" && <UserSignup setUser={setUser} />}
//         {activePage === "admin" && <AdminLogin setIsAdmin={setIsAdmin} />}
//       </div>
//       <div>
// </div>
//     </div>
//   );
// };

// const buttonStyle = {
//   margin: "10px",
//   padding: "10px 20px",
//   fontSize: "16px",
//   cursor: "pointer",
// };

// const contentStyle = {
//   marginTop: "20px",
//   padding: "20px",
//   border: "1px solid #ccc",
//   minHeight: "200px",
// };

// export default AuthPage;





// import React, { useState } from "react";

// const AuthPage = () => {
//   const [message, setMessage] = useState("");

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Welcome to Our Platform</h2>
      
//       <button onClick={() => setMessage("You clicked on Login")} style={buttonStyle}>
//         Login
//       </button>
//       <button onClick={() => setMessage("You clicked on Signup")} style={buttonStyle}>
//         Signup
//       </button>
//       <button onClick={() => setMessage("You clicked on Admin Login")} style={buttonStyle}>
//         Admin Login
//       </button>

//       {message && <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>{message}</p>}
//     </div>
//   );
// };

// const buttonStyle = {
//   margin: "10px",
//   padding: "10px 20px",
//   fontSize: "16px",
//   cursor: "pointer",
// };

// export default AuthPage;
