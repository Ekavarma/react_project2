import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const [bookings, setBookings] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            alert("Unauthorized access");
            navigate("/admin-login");
        } else {
            setBookings(JSON.parse(localStorage.getItem("bookings")) || []);
        }
    }, []);

    const handleDelete = (index) => {
        const updatedBookings = bookings.filter((_, i) => i !== index);
        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("adminToken"); // Clear admin session
        navigate("/"); // Redirect to home page
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Admin Dashboard</h2>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Event Type</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings
                        .filter(booking => booking.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.eventType}</td>
                                <td>{booking.date}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {
//     const [bookings, setBookings] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [filterType, setFilterType] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("adminToken");
//         if (!token) {
//             alert("Unauthorized access");
//             navigate("/admin-login");
//         } else {
//             setBookings(JSON.parse(localStorage.getItem("bookings")) || []);
//         }
//     }, []);

//     const handleDelete = (index) => {
//         const updatedBookings = bookings.filter((_, i) => i !== index);
//         setBookings(updatedBookings);
//         localStorage.setItem("bookings", JSON.stringify(updatedBookings));
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Admin Dashboard</h2>
//             <input
//                 type="text"
//                 className="form-control mb-3"
//                 placeholder="Search by name"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Event Type</th>
//                         <th>Date</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bookings
//                         .filter(booking => booking.name.toLowerCase().includes(searchQuery.toLowerCase()))
//                         .map((booking, index) => (
//                             <tr key={index}>
//                                 <td>{booking.name}</td>
//                                 <td>{booking.phone}</td>
//                                 <td>{booking.eventType}</td>
//                                 <td>{booking.date}</td>
//                                 <td>
//                                     <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default AdminDashboard;



















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

//  function AdminDashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterType, setFilterType] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editData, setEditData] = useState({ name: "", phone: "", eventType: "", date: "" });
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const token = localStorage.getItem("adminToken");
//   //   if (!token) {
//   //     alert("Unauthorized access");
//   //     navigate("/admin-login");
//   //   } else {
//   //     const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//   //     setBookings(storedBookings);
//   //     setFilteredBookings(storedBookings);
//   //   }
//   // }, [navigate]);
//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       alert("Unauthorized access");
//       navigate("/admin-login");
//     } else {
//       const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//       setBookings(storedBookings);
//       setFilteredBookings(storedBookings);
//     }
//   }, []); // Removed `navigate` from dependencies
  

//   useEffect(() => {
//     let filtered = bookings.filter((booking) =>
//       booking.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     if (filterType) {
//       filtered = filtered.filter((booking) => booking.eventType === filterType);
//     }
//     setFilteredBookings(filtered);
//   }, [searchQuery, filterType, bookings]);

//   const handleDelete = (index) => {
//     const updatedBookings = bookings.filter((_, i) => i !== index);
//     setBookings(updatedBookings);
//     setFilteredBookings(updatedBookings); // Ensure UI updates immediately
//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
//   };
  
//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditData(bookings[index]);
//   };

//   const handleChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     if (JSON.stringify(bookings[editIndex]) === JSON.stringify(editData)) {
//       alert("No changes made.");
//       return;
//     }
//     let updatedBookings = [...bookings];
//     updatedBookings[editIndex] = editData;
//     setBookings(updatedBookings);
//     setFilteredBookings(updatedBookings);
//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
//     setEditIndex(null);
//   };
  

//   const sendNotification = (message) => {
//     alert(`Notification Sent: ${message}`);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Admin Dashboard</h2>

//       <div className="mb-3 d-flex gap-2">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by name"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         {/* <select className="form-control" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//           <option value="">All Events</option>
//           <option>Birthday Party</option>
//           <option>Conference</option>
//           <option>Marriage</option>
//         </select> */}
//         {/* <select name="eventType" className="form-control" value={editData.eventType || "Birthday Party"} onChange={handleChange}>
//   <option>Birthday Party</option>
//   <option>Conference</option>
//   <option>Marriage</option>
// </select> */}
// <select className="form-control" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//   <option value="">All Events</option>
//   <option>Birthday Party</option>
//   <option>Conference</option>
//   <option>Marriage</option>
// </select>


//       </div>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Event Type</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredBookings.map((booking, index) => (
//             <tr key={index}>
//               <td>{booking.name}</td>
//               <td>{booking.phone}</td>
//               <td>{booking.eventType}</td>
//               <td>{booking.date}</td>
//               <td>
//                 <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
//                 <button className="btn btn-info btn-sm ms-2" onClick={() => sendNotification(`Booking confirmed for ${booking.name}`)}>Notify</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editIndex !== null && (
//         <div className="mt-4">
//           <h3>Edit Booking</h3>
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input type="text" name="name" className="form-control" value={editData.name} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Phone</label>
//               <input type="tel" name="phone" className="form-control" value={editData.phone} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Event Type</label>
//               <select name="eventType" className="form-control" value={editData.eventType} onChange={handleChange}>
//                 <option>Birthday Party</option>
//                 <option>Conference</option>
//                 <option>Marriage</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Date</label>
//               <input type="date" name="date" className="form-control" value={editData.date} onChange={handleChange} />
//             </div>
//             <button type="button" className="btn btn-success" onClick={handleUpdate} disabled={JSON.stringify(bookings[editIndex]) === JSON.stringify(editData)}>
//             Update
//             </button>

//             {/* <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button> */}
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
// export default AdminDashboard










// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export function AdminDashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterType, setFilterType] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editData, setEditData] = useState({ name: "", phone: "", eventType: "", date: "" });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       alert("Unauthorized access");
//       navigate("/admin-login");
//     } else {
//       const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//       setBookings(storedBookings);
//       setFilteredBookings(storedBookings);
//     }
//   }, [navigate]);

//   useEffect(() => {
//     let filtered = bookings.filter((booking) =>
//       booking.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     if (filterType) {
//       filtered = filtered.filter((booking) => booking.eventType === filterType);
//     }
//     setFilteredBookings(filtered);
//   }, [searchQuery, filterType, bookings]);

//   const sendNotification = (booking) => {
//     alert(`Notification sent to ${booking.phone}: "Your ${booking.eventType} is booked on ${booking.date}."`);
//   };

//   const handleDelete = (index) => {
//     const updatedBookings = bookings.filter((_, i) => i !== index);
//     setBookings(updatedBookings);
//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditData(bookings[index]);
//   };

//   const handleChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     let updatedBookings = [...bookings];
//     updatedBookings[editIndex] = editData;
//     setBookings(updatedBookings);
//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
//     setEditIndex(null);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Admin Dashboard</h2>

//       <div className="mb-3 d-flex gap-2">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by name"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <select className="form-control" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//           <option value="">All Events</option>
//           <option>Birthday Party</option>
//           <option>Conference</option>
//           <option>Marriage</option>
//         </select>
//       </div>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Event Type</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredBookings.map((booking, index) => (
//             <tr key={index}>
//               <td>{booking.name}</td>
//               <td>{booking.phone}</td>
//               <td>{booking.eventType}</td>
//               <td>{booking.date}</td>
//               <td>
//                 <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
//                 <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(index)}>Delete</button>
//                 <button className="btn btn-info btn-sm" onClick={() => sendNotification(booking)}>Notify</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editIndex !== null && (
//         <div className="mt-4">
//           <h3>Edit Booking</h3>
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input type="text" name="name" className="form-control" value={editData.name} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Phone</label>
//               <input type="tel" name="phone" className="form-control" value={editData.phone} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Event Type</label>
//               <select name="eventType" className="form-control" value={editData.eventType} onChange={handleChange}>
//                 <option>Birthday Party</option>
//                 <option>Conference</option>
//                 <option>Marriage</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Date</label>
//               <input type="date" name="date" className="form-control" value={editData.date} onChange={handleChange} />
//             </div>
//             <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
// export default AdminDashboard
















// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // export function AdminDashboard() {
// //   const [bookings, setBookings] = useState([]);
// //   const [filteredBookings, setFilteredBookings] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [filterType, setFilterType] = useState("");
// //   const [editIndex, setEditIndex] = useState(null);
// //   const [editData, setEditData] = useState({ name: "", phone: "", eventType: "", date: "" });
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("adminToken");
// //     if (!token) {
// //       alert("Unauthorized access");
// //       navigate("/admin-login");
// //     } else {
// //       const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
// //       setBookings(storedBookings);
// //       setFilteredBookings(storedBookings);
// //     }
// //   }, [navigate]);

// //   useEffect(() => {
// //     let filtered = bookings.filter((booking) =>
// //       booking.name.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     if (filterType) {
// //       filtered = filtered.filter((booking) => booking.eventType === filterType);
// //     }
// //     setFilteredBookings(filtered);
// //   }, [searchQuery, filterType, bookings]);

// //   const handleDelete = (index) => {
// //     const updatedBookings = bookings.filter((_, i) => i !== index);
// //     setBookings(updatedBookings);
// //     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
// //   };

// //   const handleEdit = (index) => {
// //     setEditIndex(index);
// //     setEditData(bookings[index]);
// //   };

// //   const handleChange = (e) => {
// //     setEditData({ ...editData, [e.target.name]: e.target.value });
// //   };

// //   const handleUpdate = () => {
// //     let updatedBookings = [...bookings];
// //     updatedBookings[editIndex] = editData;
// //     setBookings(updatedBookings);
// //     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
// //     setEditIndex(null);
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <h2>Admin Dashboard</h2>

// //       <div className="mb-3 d-flex gap-2">
// //         <input
// //           type="text"
// //           className="form-control"
// //           placeholder="Search by name"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //         />
// //         <select className="form-control" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
// //           <option value="">All Events</option>
// //           <option>Birthday Party</option>
// //           <option>Conference</option>
// //           <option>Marriage</option>
// //         </select>
// //       </div>

// //       <table className="table">
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Phone</th>
// //             <th>Event Type</th>
// //             <th>Date</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredBookings.map((booking, index) => (
// //             <tr key={index}>
// //               <td>{booking.name}</td>
// //               <td>{booking.phone}</td>
// //               <td>{booking.eventType}</td>
// //               <td>{booking.date}</td>
// //               <td>
// //                 <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
// //                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {editIndex !== null && (
// //         <div className="mt-4">
// //           <h3>Edit Booking</h3>
// //           <form>
// //             <div className="mb-3">
// //               <label className="form-label">Name</label>
// //               <input type="text" name="name" className="form-control" value={editData.name} onChange={handleChange} />
// //             </div>
// //             <div className="mb-3">
// //               <label className="form-label">Phone</label>
// //               <input type="tel" name="phone" className="form-control" value={editData.phone} onChange={handleChange} />
// //             </div>
// //             <div className="mb-3">
// //               <label className="form-label">Event Type</label>
// //               <select name="eventType" className="form-control" value={editData.eventType} onChange={handleChange}>
// //                 <option>Birthday Party</option>
// //                 <option>Conference</option>
// //                 <option>Marriage</option>
// //               </select>
// //             </div>
// //             <div className="mb-3">
// //               <label className="form-label">Date</label>
// //               <input type="date" name="date" className="form-control" value={editData.date} onChange={handleChange} />
// //             </div>
// //             <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>
// //           </form>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// // export default AdminDashboard
// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // export function AdminDashboard() {
// // //   const [bookings, setBookings] = useState([]);
// // //   const [editIndex, setEditIndex] = useState(null);
// // //   const [editData, setEditData] = useState({ name: "", phone: "", eventType: "", date: "" });
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("adminToken");
// // //     if (!token) {
// // //       alert("Unauthorized access");
// // //       navigate("/admin-login");
// // //     } else {
// // //       const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
// // //       setBookings(storedBookings);
// // //     }
// // //   }, [navigate]);

// // //   const handleDelete = (index) => {
// // //     const updatedBookings = bookings.filter((_, i) => i !== index);
// // //     setBookings(updatedBookings);
// // //     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
// // //   };

// // //   const handleEdit = (index) => {
// // //     setEditIndex(index);
// // //     setEditData(bookings[index]);
// // //   };

// // //   const handleChange = (e) => {
// // //     setEditData({ ...editData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleUpdate = () => {
// // //     let updatedBookings = [...bookings];
// // //     updatedBookings[editIndex] = editData;
// // //     setBookings(updatedBookings);
// // //     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
// // //     setEditIndex(null);
// // //   };

// // //   return (
// // //     <div className="container mt-4">
// // //       <h2>Admin Dashboard</h2>
// // //       <table className="table">
// // //         <thead>
// // //           <tr>
// // //             <th>Name</th>
// // //             <th>Phone</th>
// // //             <th>Event Type</th>
// // //             <th>Date</th>
// // //             <th>Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {bookings.map((booking, index) => (
// // //             <tr key={index}>
// // //               <td>{booking.name}</td>
// // //               <td>{booking.phone}</td>
// // //               <td>{booking.eventType}</td>
// // //               <td>{booking.date}</td>
// // //               <td>
// // //                 <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
// // //                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>

// // //       {editIndex !== null && (
// // //         <div className="mt-4">
// // //           <h3>Edit Booking</h3>
// // //           <form>
// // //             <div className="mb-3">
// // //               <label className="form-label">Name</label>
// // //               <input type="text" name="name" className="form-control" value={editData.name} onChange={handleChange} />
// // //             </div>
// // //             <div className="mb-3">
// // //               <label className="form-label">Phone</label>
// // //               <input type="tel" name="phone" className="form-control" value={editData.phone} onChange={handleChange} />
// // //             </div>
// // //             <div className="mb-3">
// // //               <label className="form-label">Event Type</label>
// // //               <select name="eventType" className="form-control" value={editData.eventType} onChange={handleChange}>
// // //                 <option>Birthday Party</option>
// // //                 <option>Conference</option>
// // //                 <option>Marriage</option>
// // //               </select>
// // //             </div>
// // //             <div className="mb-3">
// // //               <label className="form-label">Date</label>
// // //               <input type="date" name="date" className="form-control" value={editData.date} onChange={handleChange} />
// // //             </div>
// // //             <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>
// // //           </form>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // // export default AdminDashboard


// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";


// // // function AdminDashboard() {
// // //     const [bookings, setBookings] = useState([]);
// // //     const navigate = useNavigate();
  
// // //     useEffect(() => {
// // //       const token = localStorage.getItem("adminToken");
// // //       if (!token) {
// // //         alert("Unauthorized access");
// // //         navigate("/admin-login");
// // //       } else {
// // //         const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
// // //         setBookings(storedBookings);
// // //       }
// // //     }, [navigate]);
  
// // //     return (
// // //       <div className="container mt-4">
// // //         <h2>Admin Dashboard</h2>
// // //         <table className="table">
// // //           <thead>
// // //             <tr>
// // //               <th>Name</th>
// // //               <th>Phone</th>
// // //               <th>Event Type</th>
// // //               <th>Date</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {bookings.map((booking, index) => (
// // //               <tr key={index}>
// // //                 <td>{booking.name}</td>
// // //                 <td>{booking.phone}</td>
// // //                 <td>{booking.eventType}</td>
// // //                 <td>{booking.date}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     );
// // //   }
// // // export default AdminDashboard










// // // import React, { useState, useEffect } from "react";


// // // function AdminDashboard() {
// // //     const [bookings, setBookings] = useState([]);
// // //     const navigate = useNavigate();
  
// // //     useEffect(() => {
// // //       const token = localStorage.getItem("adminToken");
// // //       if (!token) {
// // //         alert("Unauthorized access");
// // //         navigate("/admin-login");
// // //       } else {
// // //         setBookings([
// // //           { name: "John Doe", phone: "1234567890", email: "john@example.com", eventType: "Birthday", date: "2025-03-20" },
// // //         ]);
// // //       }
// // //     }, [navigate]);
  
// // //     return (
// // //       <div className="container mt-4">
// // //         <h2>Admin Dashboard</h2>
// // //         <table className="table">
// // //           <thead>
// // //             <tr>
// // //               <th>Name</th>
// // //               <th>Phone</th>
// // //               <th>Email</th>
// // //               <th>Event Type</th>
// // //               <th>Date</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {bookings.map((booking, index) => (
// // //               <tr key={index}>
// // //                 <td>{booking.name}</td>
// // //                 <td>{booking.phone}</td>
// // //                 <td>{booking.email}</td>
// // //                 <td>{booking.eventType}</td>
// // //                 <td>{booking.date}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     );
// // //   }
// // // export default AdminDashboard