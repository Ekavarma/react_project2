import React from "react";
import { Container, Button } from "react-bootstrap";
// import "../styles/home.css";

function Home() {
    return (
        <Container className="home-container text-center d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>Welcome to Event Management</h1>
            <p>We organize memorable events like birthdays, conferences, and marriages.</p>
            <Button href="/booking" variant="primary" className="mt-3">Book an Event</Button>
        </Container>
    );
}

export default Home;










// function Home() {
//     return (
//       <div className="container text-center mt-4">
//         <h1>Welcome to Event Management</h1>
//         <p>We organize memorable events like birthdays, conferences, and marriages.</p>
//         <a href="/booking" className="btn btn-primary mt-3">Book an Event</a>
//       </div>
//     );
//   }
//   export default Home

// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// // import '../styles/Home.css';
// import "../styles/home.css";

// function Home() {
//   return (
//     <Container className="home-container text-center d-flex flex-column justify-content-center align-items-center vh-100">
//       <h1>Welcome to Event Management</h1>
//       <p>We organize memorable events like birthdays, conferences, and marriages.</p>
//       <Button href="/booking" variant="primary" className="mt-3">Book an Event</Button>
//     </Container>
//   );
// }

// export default Home;

