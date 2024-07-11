// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import AppointmentForm from './components/AppointmentForm';
// import AppointmentTable from './components/AppointmentTable';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import SignUpForm from './components/SignUpForm';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <main>
//         <Routes>

//           <Route path="/" element={<HomePage />} />
//           <Route path="/book-appointment" element={<AppointmentForm />} />
//           <Route path="/appointments" element={<AppointmentTable />} />
//           <Route path="/SignUp" element={<SignUpForm />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

/*New*/

import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AppointmentForm from './components/AppointmentForm';
import AppointmentTable from './components/AppointmentTable';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import Doctors from './components/Doctors';
import DForm from './components/DForm';
import ContactUs from './components/ContactUs';


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
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/our-doctors" element={<Doctors />} />
            <Route path="/apply-now" element={<DForm />} />
            <Route path="/contact-us" element={<ContactUs/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

