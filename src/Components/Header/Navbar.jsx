import React, { use } from 'react';
import logo from '../../assets/job.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
    
        logOut().then(() => {
            alert("you logged out succesfully")
        }).catch((error) => {
            console.log(error);
        });
    }
    return (

        <div className=" navbar bg-base-100 ">


            <div className="flex-1 ">
                <div className='flex items-center gap-0'>
                    <img className='w-12' src={logo} alt="" />

                    <Link to="/" className="text-3xl font-bold text-blue-500 " >Portal</Link>
                </div>

            </div>

            <div className='mr-2 text-white'>{user && user.email}</div>
            <div className="hidden lg:flex flex-none gap-4 items-center">
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                } to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }   to="/about">About</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/contact">Contact</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                } to="/companyDetails">CompanyDetails</NavLink>

                {user ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL || '/auth/profile'} alt="Profile" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/auth/profile">My Profile</Link></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/auth/login" className="btn btn-outline btn-sm">Login</Link>
                        <Link to="/auth/register" className="btn btn-primary btn-sm">Register</Link>
                    </>
                )}



            </div>



            {user ? (
                <>
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar lg:hidden">
                            <div className="lg:hidden w-10 rounded-full ">
                                <img src={user.photoURL || '/auth/profile'} alt="Profile" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/about">About</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/contact">Contact</NavLink></li>
                            <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/companyDetails">CompanyDetails</NavLink>
                            <li><Link to="/auth/profile">My Profile</Link></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabindex="0" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56  ">

                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <NavLink to="/companyDetails">CompanyDetails</NavLink>
                            <Link to="/auth/login" className="btn btn-outline btn-sm">Login</Link>
                            <Link to="/auth/register" className="btn btn-primary btn-sm">Register</Link>
                        </ul>
                    </div>
                </>
            )}




        </div>

    );
};

export default Navbar;