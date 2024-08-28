// import React,{useState} from "react";
// import axios from "axios";


// const UserRegistration = ()=>{
//     const [formData ,setFormData] = useState({userName: "",email: "",password: ""})

//     const handleChange = (e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})
//     }

//     const handleSubmit = async (e)=>{
//         e.preventDefault();
//         try{
//             const response = await axios.post('/api/register',formData);
//             console.log("User registration successfully:",response.data)
//         }catch(error){
//             console.log('Registration error');
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="username" placeholder="UserName" onChange={handleChange} required/>
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
//             <button type="submit">Register</button>
//         </form>
//     )
// };

// export default UserRegistration;

import React, { useState } from 'react';

const UserRegistration = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User registered successfully:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistration;

