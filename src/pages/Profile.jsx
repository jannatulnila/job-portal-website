import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    if (!user) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">You are not logged in.</h2>
                <p>Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-xl">
            <div className="flex flex-col items-center">
                <img 
                    src={user.photoURL || '/default-profile.png'} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{user.displayName || 'Unnamed User'}</h2>
                <p className="text-gray-600 mb-1">{user.email}</p>
               
                <div className="w-full">
                    <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Account Status: {user.status || 'Active'}</li>
                    </ul>
                    <button onClick={()=>navigate("/auth/updateProfile")} className='btn btn-primary hover:bg-primary'>UpdateInformation</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;