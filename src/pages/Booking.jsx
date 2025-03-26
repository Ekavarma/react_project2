import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/booking.css"; // Import the updated CSS

function Booking() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setIsAuthenticated(true);
    } else {
      navigate("/page"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Birthday Party",
    date: "",
  });

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if user selects a past date
    if (name === "date" && value < today) {
      alert("You cannot select a past date!");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(formData);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    alert("Booking submitted successfully!");
    setFormData({ name: "", phone: "", eventType: "Birthday Party", date: "" });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Type</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange}>
            <option>Birthday Party</option>
            <option>Conference</option>
            <option>Marriage</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today} // Disable past dates
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Booking;






// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function Booking() {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setIsAuthenticated(true);
//     } else {
//       navigate("/page"); // Redirect to login if not authenticated
//     }
//   }, [navigate]);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     eventType: "Birthday Party",
//     date: "",
//   });

//   // Get today's date in YYYY-MM-DD format
//   const today = new Date().toISOString().split("T")[0];

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Check if user selects a past date
//     if (name === "date" && value < today) {
//       alert("You cannot select a past date!");
//       return;
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     bookings.push(formData);
//     localStorage.setItem("bookings", JSON.stringify(bookings));
//     alert("Booking submitted successfully!");
//     setFormData({ name: "", phone: "", eventType: "Birthday Party", date: "" });
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Book Your Event</h2>
//       <form className="mt-3" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             className="form-control"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Event Type</label>
//           <select name="eventType" className="form-control" value={formData.eventType} onChange={handleChange}>
//             <option>Birthday Party</option>
//             <option>Conference</option>
//             <option>Marriage</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Date</label>
//           <input
//             type="date"
//             name="date"
//             className="form-control"
//             value={formData.date}
//             onChange={handleChange}
//             min={today} // Disable past dates
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-success">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Booking;
















  
