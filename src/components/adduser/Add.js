import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

    const users = {
        username: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/create", user)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/user")
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='addUser'>
            <Link to={"/user"}>View</Link>
            <h3>Add new patient</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={inputHandler} id="username" name="username" autoComplete='off' placeholder='Username' value={user.username} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' value={user.email} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='password' value={user.password}/>
                </div>
                <div className="inputGroup">
                     <button type="submit">Submit </button>
                </div>
            </form>
        </div>
    )
}

export default Add;