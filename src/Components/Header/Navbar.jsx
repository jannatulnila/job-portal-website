import React from 'react';
import logo from '../../assets/logo-job.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        
        <div class=" navbar bg-base-200 ">
          
            <div class="flex-1 ">
                <div className='flex items-center gap-0'>
                    <img className='w-12' src={logo} alt="" />
                
                <span  className="text-3xl font-bold text-blue-500 ">Portal</span>
                </div>
            </div>

            
            <div class="hidden lg:flex flex-none gap-4 items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Contact</NavLink>
                
                

                
                <div id="auth-links" class="flex gap-2">
                    <Link to="/auth/login" class="btn btn-outline btn-sm">Login</Link>
                    <Link to="/auth/register" class="btn btn-primary btn-sm">Register</Link>
                </div>

               
                <div id="user-profile" class="hidden">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img id="profile-pic" src="" alt="Profile" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/profile">My Profile</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            
            <div class="dropdown dropdown-end lg:hidden">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>

                    
                    <div id="mobile-auth-links" class="flex flex-col gap-1 mt-2">
                        <a href="/login" class="btn btn-outline btn-sm">Login</a>
                        <a href="/register" class="btn btn-primary btn-sm">Register</a>
                    </div>
                    <div id="mobile-user-profile" class="hidden mt-2">
                        <a href="/profile" class="btn btn-ghost btn-sm">My Profile</a>
                        <a href="/logout" class="btn btn-ghost btn-sm">Logout</a>
                    </div>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;