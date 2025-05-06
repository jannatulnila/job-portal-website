import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';

const ForgetPassword = () => {
    const { forgetPassword} = useContext(AuthContext);
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(() => {
        if (location.state?.email) {
            emailRef.current.value = location.state.email;
        }
        
    }, [location.state]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        

        forgetPassword(email)
            .then(() => {
                alert("A password reset email has been sent. Redirecting you to Gmail...");
                window.location.href = "https://mail.google.com"; 
                navigate("/auth/login")
            })
            .catch(error => {
                alert(error.message);
            });
    }

        

    return (
        <div>
               <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
                <p className='font-semibold text-xl text-center mb-4'>Reset Your Password</p>
                <form onSubmit={handleResetPassword} className="space-y-4">
                    <div>
                        <label className="label">Email</label>
                        <input type="email" ref={emailRef} className="input w-full" placeholder="Enter your email" />
                    </div>
                    <button type='submit' className="btn btn-primary w-full">Reset Password</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ForgetPassword;