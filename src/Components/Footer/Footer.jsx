import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content  lg:flex justify-around mt-12">
            <div >
                <span className="footer-title">Jobs Portal</span>
                <a className="link link-hover">Browse Companies</a>
                <a className="link link-hover">Find Jobs</a>
                <a className="link link-hover">Apply Online</a>
                <a className="link link-hover">FAQs</a>
            </div>

            <div>
                <span className="footer-title">Company</span>
                
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/about">About</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/contact">Contact</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                }  to="/companyDetails">CompanyDetails</NavLink>
            </div>

            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of Use</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Cookie Policy</a>
            </div>

            <div>
                <span className="footer-title">Follow Us</span>
                <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current" viewBox="0 0 24 24"><path d="M24 4.6c-.9.4-1.8.6-2.7.8a4.7 4.7 0 0 0 2.1-2.6 9.4 9.4 0 0 1-3 1.1 4.7 4.7 0 0 0-8 4.3A13.4 13.4 0 0 1 1.7 3.2a4.7 4.7 0 0 0 1.4 6.2 4.7 4.7 0 0 1-2.1-.6v.1a4.7 4.7 0 0 0 3.8 4.6 4.8 4.8 0 0 1-2.1.1 4.7 4.7 0 0 0 4.4 3.3 9.4 9.4 0 0 1-6.9 1.9 13.4 13.4 0 0 0 7.2 2.1c8.6 0 13.3-7.1 13.3-13.3v-.6a9.5 9.5 0 0 0 2.3-2.4z" /></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current" viewBox="0 0 24 24"><path d="M19.6 3H4.4C3.1 3 2 4.1 2 5.4v13.2C2 19.9 3.1 21 4.4 21h15.2c1.3 0 2.4-1.1 2.4-2.4V5.4C22 4.1 20.9 3 19.6 3zM8.6 17.4H5.8V9h2.8v8.4zM7.2 7.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM18.2 17.4h-2.8v-4.4c0-1-.4-1.6-1.3-1.6s-1.4.7-1.4 1.6v4.4h-2.8V9h2.6v1.2h.1a2.9 2.9 0 0 1 2.6-1.4c1.9 0 3 1.3 3 3.4v5.2z" /></svg></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;