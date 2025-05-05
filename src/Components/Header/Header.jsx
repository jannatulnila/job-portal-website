import React from 'react';
import hedaering from "../../assets/header.jpg"

const Header = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={hedaering} className="w-[40%] rounded-lg shadow-2xl" />
                
                <div>
                    <h1 className="text-5xl font-bold text-white">Find Your Dream Job Today!</h1>
                    <p className="py-6 text-white">Connecting talent with opportunity. Explore top companies hiring now.</p>
                </div>
               
            </div>
        </div>
    );
};

export default Header;