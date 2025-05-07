import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';

const ForgetPassword = () => {
    const { forgetPassword } = useContext(AuthContext);
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);


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
                setSuccess(true);
            })
            .catch(error => {
                alert(error.message);
            });
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
                {success ? (
                    <div className='text-center space-y-4'>
                        <p className='text-green-600 font-semibold text-lg'>A password reset email has been sent!</p>
                        <button
                            onClick={() => navigate('/auth/login')}
                            className="btn btn-primary w-full">
                            Go to Login
                        </button>
                    </div>
                ) : (
                    <>
                        <p className='font-semibold text-xl text-center mb-4'>Reset Your Password</p>
                        <form onSubmit={handleResetPassword} className="space-y-4">
                            <div>
                                <label className="label">Email</label>
                                <input type="email" ref={emailRef} className="input w-full" placeholder="Enter your email" />
                            </div>
                            <button type='submit' className="btn btn-primary w-full">Reset Password</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ForgetPassword;