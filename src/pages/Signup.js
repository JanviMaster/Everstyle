import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import "../App.css";
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error,setError] = useState('')
    const [load,setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <div>
            <Card className='container border-300' style={{ backgroundColor: ' rgb(57, 51, 51)',color:"whitesmoke",boxShadow:"0px 0px 5px black"}}>
                <Card.Body>
                    <h2 className='text-center mb-4'>SignUp</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form className='m-2' onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required className='mb-3'></Form.Control>
                        </Form.Group>
                        <Form.Group passwordid=''>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required className='mb-3'></Form.Control>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required className='mb-3'></Form.Control>
                        </Form.Group>
                        <Button disabled={load} className='w-100 mt-3 mb-3' type='submit'>SignUp</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-4 text-white'>
                Already have an account? <Link to='/login' className="text-primary" style={{fontSize:"2.1vH",textDecoration:'none'}}>Login</Link>
            </div>
        </div>
    )
}