









import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/Usersignup";
import LoginPage from "./components/LoginPage";
// import AuthPage from "./components/page";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import "./styles/global.css";
import AuthPage from "./components/page";



function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    return (
        <Router>
            <Navbar user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events/>} />
                <Route path="/booking" element={user ? <Booking /> : <UserLogin setUser={setUser} />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/login" element={<UserLogin setUser={setUser} />} />
                <Route path="/user-signup" element={<UserSignup setUser={setUser} />} />
                <Route path="/admin-loginpage" element={<LoginPage setUser={setUser} />} />
                
                <Route path="/page" element={<AuthPage setUser={setUser} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;













