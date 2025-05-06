import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [errorMessage, setErrorMessage]= useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
  
    const {createUser, setUser, updateUser} = use(AuthContext);
    const handleRegister = (e)=>{
        e.preventDefault();

       

        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,photo, email, password});

        setSuccess(false);


        // password validate 
    //  const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
      
        if (!/[a-z]/.test(password)) {
            setErrorMessage('Password must include at least one lowercase letter.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password must include at least one uppercase letter.'
            );
            return;
        }
        else if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        } else {
            setErrorMessage('');
        }


        createUser(email,password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
            updateUser({displayName:name, photoURL: photo}).then(()=>{
                setUser({...user,displayName:name, photoURL: photo});
            })
            .catch((error) => {
               console.log(error);
               setUser(user);
              });
            
            setSuccess(true);
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorMessage);
            setErrorMessage(errorMessage);
          });

         
    }
    return (
        <div className='flex justify-center items-center '>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <p className='font-semibold text-xl text-center mt-4'>Register your Account </p>
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                name='name'
                type="text" className="input" placeholder="Your Name" required/>
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input name='photo' type="text" className="input" placeholder="Photo URL" required/>
                {/* email */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required/>
                {/* password */}
                <label className="label">Password</label>
                <input type="password" 
                 name='password'
                  className="input"
                   placeholder="Password"
                    required
                    // minLength="6"
                    // pattern='(^(?=.*[A-Z])(?=.*[a-z]).{6,}$)'
                    // title='Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
                    />
                
                <button type='submit' className="btn btn-primary mt-4">Register</button>
                <p className='font-semibold text-center pt-5'>Already have an account?<Link className='text-primary underline' to="/auth/login">Login</Link> </p>
              </fieldset>
            </form>
            {
                errorMessage && <p className='text-red-600'>{errorMessage}</p>
            }
            {
                success && <p className='text-green-500'>User has created successfully</p>
            }
          </div>
        </div>
    );
};

export default Register;