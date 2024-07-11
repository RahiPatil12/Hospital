// import React from 'react';
// import './HomePage.css';
// import HeroImg from './images/HeroImg.jpg';
// import MoreInfo from './images/MoreInfo.png';
// import Care from './images/Care.png';
// import doctors from './images/doctors.png';
// import { Link } from 'react-router-dom';



// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <div className='HomeImg'>
//         <img src={HeroImg} alt='HeroImg' className='HeroImg' />
//       </div>
//       <main className="home-main">
//         <div className="info-cards">
//           <div className="info-card">
//             <img src={MoreInfo} alt="More Info" />
//             <p>Click on the button for more information</p>
//             <button className="info-button">More Information</button>
//           </div>
//           <div className="info-card">
//             <img src={Care} alt="Create Account" />
//             <p>Create Account so that we can take good care of you.</p>
//             <Link to="/SignUp">
//               <button className="info-button">Create Account</button>
//             </Link>
//           </div>
//           <div className="info-card">
//             <img src={doctors} alt="Apply Now" />
//             <p>We are employing for doctors</p>
//             <button className="info-button">Apply Now</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// };

// export default HomePage;

/*New*/

import React from 'react';
import './HomePage.css';
import group from './images/group.png';
import { MdPhoneAndroid, MdPerson, MdLocalPharmacy, MdScience } from 'react-icons/md';
import { Link } from 'react-router-dom';
import MoreInfo from './images/MoreInfo.png';
import Care from './images/Care.png';
import doctors from './images/doctors.png';

const HomePage = () => {
  return (
    <div className='HomeContainer'>
      <div className='HeroImg'>
       <div className='quote'>Your <br/><b>Health</b><br/>Is Our<br/> <b>Priority</b></div>
       <div className='photo'> <img src={group} alt="group"/></div>
      </div>
      <div className='BoxContainer'>
        <div className='Box box1'>
          Instant Video Consultation
          <div className='icon'>
          <MdPhoneAndroid size={150}/>
          </div>
        </div>
        <div className='Box box2'>
          Find Doctors Near You 
          <div className='icon'>
            <MdPerson size={180}/>
            </div>
        </div>
        <div className='Box box3'>
          24/7 Medicines
          <div className='icon'>
          <MdLocalPharmacy size={170}/>
          </div>
        </div>
        <div className='Box box4'>
          Lab Tests
          <div  className='icon'>
          <MdScience size={180} />
          </div>
        </div>
      </div>
      <main className="home-main">
             <div className="info-cards">
                <div className="info-card">
                  <img src={MoreInfo} alt="More Info" />
                  <p>Click on the button for more information</p>
                  <button className="info-button">More Information</button>
                </div>
                <div className="info-card">
                  <img src={Care} alt="Create Account" />
                  <p>Create Account so that we can take good care of you.</p>
                  <Link to="/SignUp">
                    <button className="info-button">Create Account</button>
                 </Link>
                </div>
               <div className="info-card">
                 <img src={doctors} alt="Apply Now" />
                 <p>We are employing for doctors</p>
                 <Link to="/apply-now"><button className="info-button">Apply Now</button></Link>
               </div>
             </div>
            </main>
    </div>
    
    
            
  )
};
export default HomePage;