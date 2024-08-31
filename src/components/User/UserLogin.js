// import React,{useState} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UserLogin = ()=>{
//     const [formData,setFormData] = useState({email:"",password:""})
//     const navigate = useNavigate();

//     const handleChange = (e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})
//     }

//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         const response = await axios.post('/api/login',formData)
//         console.log('User logged in successfully:',response.data);
//         navigate('/profile')
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="Email" onChange={handleChange} required/>        
//             <input type="password" placeholder="Password" onChange={handleChange} required/>    
//             <button type="submit">Register</button>    
//             </form>
//     )
// };

// export default UserLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const staticUser = { email: 'ranakamal@gmail.com', password: 'Kamal@123' };

    if (formData.email === staticUser.email && formData.password === staticUser.password) {
      console.log('User logged in successfully:', formData);
      navigate('/profile');
    } else {
      console.error('Login error: Invalid credentials');
      alert('Invalid credentials!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
