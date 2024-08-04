import React from 'react';
import './HomePage.css';
import group from './images/group.png';
import { MdPhoneAndroid, MdPerson, MdLocalPharmacy, MdScience } from 'react-icons/md';
import { FaHospitalAlt, FaProcedures, FaUserMd, FaUsers, FaAward } from 'react-icons/fa';


const HomePage = () => {
  return (
    <div className='HomeContainer'>
      <div className='HeroImg'>
        <div className='quote'>Your <br /><b>Health</b><br />Is Our<br /> <b>Priority</b></div>
        <div className='photo'> <img src={group} alt="group" height={290} /></div>
      </div>
      <div className='BoxContainer'>
        <div className='Box box1'>
          Instant Video Consultation
          <div className='icon'>
            <MdPhoneAndroid size={150} />
          </div>
        </div>
        <div className='Box box2'>
          Find Doctors Near You
          <div className='icon'>
            <MdPerson size={180} />
          </div>
        </div>
        <div className='Box box3'>
          24/7 Medicines
          <div className='icon'>
            <MdLocalPharmacy size={170} />
          </div>
        </div>
        <div className='Box box4'>
          Lab Tests
          <div className='icon'>
            <MdScience size={180} />
          </div>
        </div>
      </div>
      <div className='HomeP'>
        <div className='Home2'>
          <h2>Oxycare Hospital: Your Best Choice for Multispeciality Care in
            Maharashtra</h2>
        </div>
        <div className='Home2'>
          <h5><br />Where compassionate healing blends with cutting-edge expertise.<br />
            Raising healthcare standards and redefining excellence in patient care.</h5>
        </div>
        <div className='HomeCircles'>
          <div className='HomeCircle'>
            <FaHospitalAlt />
          </div>

          <div className='HomeCircle'>
            <FaProcedures />
          </div>
          <div className='HomeCircle'>
            <FaUserMd />
          </div>
          <div className='HomeCircle'>
            <FaUsers />
          </div>
          <div className='HomeCircle'>
            <FaAward />
          </div>
        </div>
        <div className='HomeQuotes'>
          <div className='HomeQuote'>
            2 Hospitals
          </div>
          <div className='HomeQuote'>
            1000+ Beds
          </div>
          <div className='HomeQuote'>
            2000+ Clinicians
          </div>
          <div className='HomeQuote'>
            2600+ Expert Staff
          </div>
          <div className='HomeQuote'>
            27 Years Of Experience
          </div>
        </div>
      </div>
    </div>
  )
};
export default HomePage;