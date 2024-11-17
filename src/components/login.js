
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";

import { toast } from "react-toastify";
import SignInwithGoogle from "./signInwithGoogle";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
    <div className="Login-App">
        <div className="Login-auth-wrapper">
          <div className="Login-auth-inner">
    <form onSubmit={handleSubmit}>
      <h3 className="Login-h3">Login</h3>

      <div className="Login-mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="Login-form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="Login-mb-3">
        <label>Password</label>
        <input
          type="password"
          className="Login-form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="Login-d-grid">
        <button type="submit" className="Login-btn btn-primary">
          Submit
        </button>
      </div>
      <p className="Login-forgot-password text-right">
        New user <Link to="/register">Register Here</Link>
      </p>
      <SignInwithGoogle/>
    </form>
    </div>
    </div>
    </div>
    </>
  );
}

export default Login;


// import React, { useRef, useState } from 'react';
// import { Card, Form, Button, Alert } from 'react-bootstrap';
// import "../App.css";
// import { useAuth } from '../firebase/AuthContext';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// // import { doSignInWithEmailAndPassword ,doSignInWithGoogle } from '../../../firebase/AuthContext';
// // import { useAuth } from '../context';

// export default function Login() {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const { login } = useAuth();
//     const [error,setError] = useState('')
//     const [load,setLoading] = useState(false)
//     const navigate = useNavigate()

//     async function handleSubmit(e)  {
//         e.preventDefault();
//         try{
//             setError('')
//             setLoading(true)
//             await login(emailRef.current.value, passwordRef.current.value);
//             navigate('/')
//         } catch (error) {
//             setError(error.message)
//         }
//         setLoading(false)
//     }

//     return (
//         <div>
//             <br></br>
//             <Card className='container border-300' style={{ backgroundColor: ' rgb(57, 51, 51)',color:"whitesmoke",boxShadow:"0px 0px 5px black"}}>
//             {/* rgb(57, 51, 51)' 222831*/}
//                 <Card.Body>
//                     <h2 className='text-center mb-4'>Login</h2>
//                     {error && <Alert variant='danger'>{error}</Alert>}
//                     <Form className='m-2' onSubmit={handleSubmit}>
//                         <Form.Group id='email'>
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type='email' ref={emailRef} required className='mb-3'></Form.Control>
//                         </Form.Group>
//                         <Form.Group id='password'>
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type='password' ref={passwordRef} required className='mb-3'></Form.Control>
//                         </Form.Group>
//                         <Button disabled={load} className='w-100 mt-3 mb-3' type='submit'>Login</Button>
//                         <Link to="/forgot-password">Forgot Password?</Link>
//                     </Form>
//                 </Card.Body>
//             </Card>
//             <div className='w-100 text-center mt-4 text-white'>
//                 Don't have an account? <Link to='/signup' className="text-primary" style={{fontSize:"2.1vH",textDecoration:'none'}}>Signup</Link>
//             </div>
//         </div>
//     )
// }