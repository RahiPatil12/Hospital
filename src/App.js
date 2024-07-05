import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AppointmentForm from './components/AppointmentForm';
import AppointmentTable from './components/AppointmentTable';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-appointment" element={<AppointmentForm />} />
          <Route path="/appointments" element={<AppointmentTable />} />
          <Route path="/SignUp" element={<SignUpForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
