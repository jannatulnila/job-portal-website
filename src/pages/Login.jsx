import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center '>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <p className='font-semibold text-xl text-center mt-4'>Login your Account </p>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                
                <button className="btn btn-primary mt-4">Login</button>
                <p className='font-semibold text-center pt-5'>Don't have an account?<Link className='text-primary underline' to="/auth/register">Register</Link> </p>
              </fieldset>
            </div>
          </div>
        </div>
      
    );
};

export default Login;