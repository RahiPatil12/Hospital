import React from 'react';
import './HomePage.css';
import HeroImg from './images/HeroImg.jpg';
import MoreInfo from './images/MoreInfo.png';
import Care from './images/Care.png';
import doctors from './images/doctors.png';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div className="home-container">
      <div className='HomeImg'>
        <img src={HeroImg} alt='HeroImg' className='HeroImg' />
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
            <button className="info-button">Apply Now</button>
          </div>
        </div>
      </main>
    </div>
  )
};

export default HomePage;
