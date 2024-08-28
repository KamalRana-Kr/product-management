// import React,{useState} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const AdminLogin = ()=>{
//     const [formData,setFormData] = useState({email:"",password:""})
//     const navigate = useNavigate()

//     const handleChange = (e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})
//     }

//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         try{
//             const response = await axios.post('/api/admin/login',formData);
//             console.log('Admin logged in successfully:', response.data);
//             navigate('/admin/panel');      
            
//         }catch(error){
//             console.log('Error in admin login',error);
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="Email" onChange={handleChange} required></input>
//             <input type="password" placeholder="Password" onChange={handleChange} required></input>
//             <button type="submit">Login as Admin</button>
//         </form>
//     )
// }
// export default AdminLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const staticAdmin = { email: 'adminkamal@gmail.com', password: 'Kamal@123' };

    if (formData.email === staticAdmin.email && formData.password === staticAdmin.password) {
      console.log('Admin logged in successfully:', formData);
      navigate('/admin/panel');
    } else {
      console.error('Admin login error: Invalid credentials');
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

export default AdminLogin;
