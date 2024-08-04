import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AppointmentForm from './components/AppointmentForm';
import AppointmentTable from './components/AppointmentTable';
// import Login from './components/Login';
import Doctors from './components/Doctors';
import DForm from './components/DForm';
import ContactUs from './components/ContactUs';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-appointment" element={<AppointmentForm />} />
            <Route path="/appointments" element={<AppointmentTable />} />
            <Route path="/our-doctors" element={<Doctors />} />
            <Route path="/apply-now" element={<DForm />} />
            <Route path="/contact-us" element={<ContactUs/>}/>
            {/* <Route path="/Add" element={<Add/>}/> */}
            <Route path="/add" element={<Add/>} />
            <Route path="/User" element={<User/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

