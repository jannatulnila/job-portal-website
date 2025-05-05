import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center '>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <p className='font-semibold text-xl text-center mt-4'>Register your Account </p>
            <div className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                name='name'
                type="text" className="input" placeholder="Your Name" />
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input type="i" className="input" placeholder="Photo URL" />
                {/* email */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                
                <button className="btn btn-primary mt-4">Register</button>
                <p className='font-semibold text-center pt-5'>Already have an account?<Link className='text-primary underline' to="/auth/login">Login</Link> </p>
              </fieldset>
            </div>
          </div>
        </div>
    );
};

export default Register;