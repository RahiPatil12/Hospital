// import React from 'react';
// import './Doctors.css';
// import { FaBone, FaBrain, FaWeight, FaEye } from 'react-icons/fa'

// const doctors = [
//     { name: 'Dr. Sanjana Gupta', specialization: 'Neurosurgeon', imageUrl: 'https://via.placeholder.com/100' },
//     { name: 'Dr. Pimple Popper', specialization: 'Psychiatrist', imageUrl: 'https://via.placeholder.com/100' },
//     { name: 'Dr. Sherry Ross', specialization: 'Gynecologist', imageUrl: 'https://via.placeholder.com/100' },
//     { name: 'Dr. Jon Gunter', specialization: 'Neurologist', imageUrl: 'https://via.placeholder.com/100' },
// ];

// const DoctorCard = ({ name, specialization, imageUrl }) => (
//     <div className="doctor-card">
//         <img src={imageUrl} alt={name} />
//         <h3>{name}</h3>
//         <p>{specialization}</p>
//     </div>
// );

// const Doctors = () => {
//     return (
//         <div className="doctors-container">
//             <h2>Book an appointment for an<br />in-clinic consultation</h2>
//             <div className='category'>
//                 <div className='options'>
//                     Orthopedic
//                     <FaBone size={30} className='icons' />
//                 </div>
//                 <div className='options'>
//                     Neurology
//                     <FaBrain size={30} className='icons' />
//                 </div>
//                 <div className='options'>
//                     Obesity
//                     <FaWeight size={30} className='icons' />
//                 </div>
//                 <div className='options'>
//                     Eye Care
//                     <FaEye size={30} className='icons' />
//                 </div>
//             </div>
//             <div className="doctor-list">
//                 {doctors.map((doctor, index) => (
//                     <DoctorCard key={index} {...doctor} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Doctors;

import React, { useState } from 'react';
import './Doctors.css';
import { FaBone, FaBrain, FaWeight, FaEye } from 'react-icons/fa';
// import boy1 from './images/boy1.png';
import boy1 from './images/boy1.png';
import girl1 from './images/girl1.png';
import boy2 from './images/boy2.png';
import girl2 from './images/girl2.png';
import boy3 from './images/boy3.png';
import girl3 from './images/girl3.png';
import boy4 from './images/boy4.png';
import girl4 from './images/girl4.png';
import boy5 from './images/boy5.png';
import girl5 from './images/girl5.png';
import boy6 from './images/boy6.png';
import girl6 from './images/girl6.png';
import boy7 from './images/boy7.png';
import girl7 from './images/girl7.png';
import boy8 from './images/boy8.png';
import girl8 from './images/girl8.png';

const doctors = [
    // Orthopedic doctors
    { name: 'Dr. John Smith', specialization: 'Orthopedic Surgeon', imageUrl: boy1, category: 'Orthopedic' },
    { name: 'Dr. Jane Doe', specialization: 'Joint Specialist', imageUrl: girl1, category: 'Orthopedic' },
    { name: 'Dr. Robert Brown', specialization: 'Spine Surgeon', imageUrl: boy2, category: 'Orthopedic' },
    { name: 'Dr. Emily White', specialization: 'Sports Medicine', imageUrl: girl2, category: 'Orthopedic' },

    // Neurology doctors
    { name: 'Dr. Alan Green', specialization: 'Neurologist', imageUrl: boy3, category: 'Neurology' },
    { name: 'Dr. Carol King', specialization: 'Epileptologist', imageUrl: girl3, category: 'Neurology' },
    { name: 'Dr. David Wilson', specialization: 'Stroke Specialist', imageUrl: boy4, category: 'Neurology' },
    { name: 'Dr. Sarah Lee', specialization: 'Neurophysiologist', imageUrl: girl4, category: 'Neurology' },

    // Obesity doctors
    { name: 'Dr. Lisa Adams', specialization: 'Dietitian', imageUrl: boy5, category: 'Obesity' },
    { name: 'Dr. Mark Taylor', specialization: 'Bariatric Surgeon', imageUrl: girl5, category: 'Obesity' },
    { name: 'Dr. Nancy Hall', specialization: 'Nutritionist', imageUrl: boy6, category: 'Obesity' },
    { name: 'Dr. Oliver Scott', specialization: 'Endocrinologist', imageUrl: girl6, category: 'Obesity' },

    // Eye Care doctors
    { name: 'Dr. Alice Johnson', specialization: 'Ophthalmologist', imageUrl: boy7, category: 'Eye Care' },
    { name: 'Dr. Brian Martinez', specialization: 'Optometrist', imageUrl: girl7, category: 'Eye Care' },
    { name: 'Dr. Clara Lee', specialization: 'Retina Specialist', imageUrl: boy8, category: 'Eye Care' },
    { name: 'Dr. Daniel Thomas', specialization: 'Glaucoma Specialist', imageUrl: girl8, category: 'Eye Care' },
];

const categories = [
    { name: 'Orthopedic', className:'icons', icon: <FaBone size={30} /> },
    { name: 'Neurology',className:'icons', icon: <FaBrain size={30} /> },
    { name: 'Obesity', className:'icons', icon: <FaWeight size={30} /> },
    { name: 'Eye Care', className:'icons',icon: <FaEye size={30} /> }
];

const DoctorCard = ({ name, specialization, imageUrl }) => (
    <div className="doctor-card">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{specialization}</p>
    </div>
);

const Doctors = () => {
    const [selectedCategory, setSelectedCategory] = useState('Orthopedic');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredDoctors = doctors.filter(doctor => 
        selectedCategory === '' || doctor.category === selectedCategory
    );

    return (
        <div className="doctors-container">
            <h2>Book an appointment for an<br />in-clinic consultation</h2>
            <div className='category'>
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className={`options ${selectedCategory === cat.name ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(cat.name)}
                    >
                        {cat.name}
                        {cat.icon}
                    </div>
                ))}
            </div>
            <div className="doctor-list">
                {filteredDoctors.map((doctor, index) => (
                    <DoctorCard key={index} {...doctor} />
                ))}
            </div>
        </div>
    );
};

export default Doctors;
