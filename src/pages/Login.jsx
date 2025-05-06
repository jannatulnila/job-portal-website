import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const {signIn} = use(AuthContext);
    const handleLogin = (e)=>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log({email, password})
      signIn(email, password).then(result =>{
        const user = result.user;
        console.log(user);
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
      });
    }
    return (
        <div className='flex justify-center items-center '>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <p className='font-semibold text-xl text-center mt-4'>Login your Account </p>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                {/* password */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                
                <button type='submit' className="btn btn-primary mt-4">Login</button>
                <p className='font-semibold text-center pt-5'>Don't have an account?<Link className='text-primary underline' to="/auth/register">Register</Link> </p>
              </fieldset>
            </form>
          </div>
        </div>
      
    );
};

export default Login;