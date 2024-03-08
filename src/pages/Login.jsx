import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


function Login() {
    const navigate = useNavigate();
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const tostifyOption = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };

  // const handleValidation = () => {
  //   if (email === '' || password === '') {
  //     toast.error('All Fields Are Required', tostifyOption);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
          const userCredentials = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredentials);
          const user = userCredentials.user;
          localStorage.setItem('ag-token', user.accessToken);
          localStorage.setItem('ag-user', JSON.stringify(user));
          navigate('/');
    }catch(error){
      console.log(error)
    }
    
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-4">AG Printers</h1>
            <p className="lead">Where Fabric Meets Artistry. We specialize in printing captivating designs onto textiles, turning ordinary fabrics into extraordinary works of art.</p>
          </div>
        </div>
        <div className="col-md-6">
          
          <div className="card shadow-lg p-4">
            <h5 className="card-title text-center mb-4">Sign in to your account</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
