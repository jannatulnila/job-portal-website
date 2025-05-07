
import React, {  useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../Components/Header/Navbar';

const UpdateProfile = () => {
    const {updatedProfile} = useContext(AuthContext);
    const [name,setName] = useState();
    const [photoURL, setPhotoURL] = useState();


    const handleUpdateProfile =()=>{
        updatedProfile(name, photoURL)
      .then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
       console.log(error)
      });
    }
   
      
    return (
        <div className='w-11/12 mx-auto  '>
            <Navbar></Navbar>
             <div className="card bg-base-200 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="input" placeholder="Name" />
          <label className="label">Photo Url</label>
          <input type="text" value={photoURL} onChange={(e)=>setPhotoURL(e.target.value)} className="input" placeholder="PhotoUrl" />
          <button onClick={handleUpdateProfile} className="btn btn-primary  mt-4">Update Profile</button>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default UpdateProfile;