import React from 'react';
import hedaering from "../../assets/header.jpg"
import { motion } from "framer-motion";

const Header = () => {

    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
             
            <motion.img 
            src={hedaering} 
            className="w-[40%] rounded-lg shadow-2xl" 
             initial={{ opacity: 0, x: 100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 4 }}
             />
                
                <div>
                    <motion.h1 
                     initial={{ opacity: 0, y: 50 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 4 }}
                    className="text-5xl font-bold text-white">Find Your Dream Job Today!</motion.h1>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 4 }}
                    className="py-6 text-white">Connecting talent with opportunity. Explore top companies hiring now.</motion.p>
                </div>
               
            </div>
        </div>
    );
};

export default Header;