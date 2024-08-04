import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

 const users = {
    username:"",
    email: "",
    password:""
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [user, setUser] = useState(users);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
 }

 useEffect(()=>{
    axios.get(`http://localhost:5000/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/update/${id}`, user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/user")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className='addUser'>
        <Link to={"/user"}>Back</Link>
        <h3>Update Patient</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="username">Username</label>
                <input type="text" value={user.username} onChange={inputChangeHandler} id="username" name="username" autoComplete='off' placeholder='Username' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE</button>
            </div>
        </form>
    </div>
  )
}

export default Edit;