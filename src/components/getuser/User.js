import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './user.css';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit, FaEllipsisH } from 'react-icons/fa';

const User = () => {
  const [users, setUsers] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getall');
        console.log('API Response:', response.data); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success(response.data.msg, { position: 'top-right' });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const toggleDropdown = (userId) => {
    setOpenDropdown(openDropdown === userId ? null : userId);
  };

  return (
    <div className='userTable'>
      <Link to={'/add'} className='addButton'>Add Patient</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
             
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className='actionButtons'>
                  <button className='button_user' onClick={() => toggleDropdown(user._id)}>
                    <FaEllipsisH color='black' size={25}/>
                  </button>
                  {openDropdown === user._id && (
                    <div className='dropdown'>
                      <button className='dropdown_item' onClick={() => deleteUser(user._id)}>
                        <FaTrash size={25}/> Delete
                      </button>
                      <Link to={`/edit/${user._id}`} className='dropdown_item'>
                        <FaEdit size={25}/> Edit
                      </Link>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
