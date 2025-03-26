import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // Import the updated CSS

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear stored user session
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <a className="logo" href="/">Event Management</a>
      <div className="nav-links">
        <a href="/events">Event</a>
        <a href="/booking">Booking</a>
        {user ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <a href="/page">Logins</a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// import "../styles/Navbar.css";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear(); // Clear stored user session
//     setUser(null);
//     navigate("/");
//   };

//   return (
//     <nav className="nav nav-pills flex-column flex-sm-row">
//       <a className="flex-sm-fill text-sm-center nav-link logo" href="/">Event Management</a>
//       <div></div>
//       <div> <a className="flex-sm-fill text-sm-center nav-link" href="/events">Event</a>
//       <a className="flex-sm-fill text-sm-center nav-link" href="/booking">Booking</a>

//       {user ? (
//         <button onClick={handleLogout} className="flex-sm-fill text-sm-center nav-link btn btn-danger">
//           Logout
//         </button>
//       ) : (
//         <a className="flex-sm-fill text-sm-center nav-link" href="/page">Logins</a>
//       )}</div>
//     </nav>
//   );
// }

// export default Navbar







// import "../styles/navbar.css"

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";  // ✅ Import Link


// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();

//   // const handleLogout = () => {
//   //   localStorage.removeItem("user");
//   //   setUser(null);
//   //   navigate("/");
//   // };
//   const handleLogout = () => {
//     localStorage.clear(); // Ensures both admin and user tokens are removed
//     setUser(null);
//     navigate("/");
//   };


//   return (
//     <nav class="nav nav-pills flex-column flex-sm-row">
      
      
//       <a class="flex-sm-fill text-sm-center nav-link " href="/">Eventmanagement</a>
//       <a class="flex-sm-fill text-sm-center nav-link" href="/events">Event</a>
//       <a class="flex-sm-fill text-sm-center nav-link" href="/booking">Booking</a>
//       <a class="flex-sm-fill text-sm-center nav-link" href="/page">logins</a>

//     </nav>

//     // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     //   <Link className="navbar-brand" to="/">Event Management</Link>
//     //   <div className="navbar-nav">
//     //     <Link className="nav-link" to="/events">Events</Link>
//     //     <Link className="nav-link" to="/booking">Booking</Link>
//     //     <Link className="nav-link" to="/page">page</Link>
//     //   </div>
//     // </nav>
//   );
// }
// export default Navbar






