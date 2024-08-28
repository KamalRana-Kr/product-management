// import React,{useState} from "react";
// import axios from "axios";

// const UserProfile = ()=>{
//     const [profile,setProfile] = useState({
//         username: 'JohnDoe',
//         email: 'john@example.com',
//         picture: null,
//       });
//     const [image,setImage] = useState(null);

//     const fetchProfile = async()=>{
//         try{
//             const response = await axios.get('/api/profile');
//             setProfile(response.data)
//         }catch(error){
//             console.log('Error fetching profile',error);
//         }
//     }

//     const handleImageChange = (e)=>{
//         setImage(e.target.file[0]);
//     }

//     const handleImageUpload = async()=>{
//         const formData = new FormData()
//         formData.append('image',image);
//         try{
//             await axios.post('/api/profile/upload', formData);
//             fetchProfile();
//         }catch(error){
//             console.log('Error uploading image',error);
            
//         }
//     }
//     React.useEffect(() => {
//         fetchProfile();
//       }, []);
      
//     return (
//         <div>
//             <h1>Profile</h1>
//             <p>Username: {profile.username}</p>
//             <p>Email: {profile.email}</p>
//             <input type="file" onChange={handleImageChange}/>
//             <button onClick={handleImageUpload}>Upload Picture</button>
//             {profile.picture && <img src={profile.picture} alt = "Profile"/>}
//             </div>
//     )
// }
// export default UserProfile;

import React, { useState,useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState({});
  const [image, setImage] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/api/profile');
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);
    try {
      await axios.post('/api/profile/upload', formData);
      fetchProfile();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Picture</button>
      {profile.picture && <img src={profile.picture} alt="Profile" />}
    </div>
  );
};

export default UserProfile;
