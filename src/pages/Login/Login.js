import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { logIn, setLoading, forgetPassword } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [storeEmail, setStoreEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;

                form.reset();
                setError('');

                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Successfully logged in');
                }
                else {
                    toast.error('Please verify your email first');
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleEmail = (event) => {
        const setEmail = event.target.value;
        setStoreEmail(setEmail);
    }

    const handleForgetPassword = () => {
        forgetPassword(storeEmail)
            .then(() => {
                toast.success("password reset email sent.")
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <h2 className='text-center py-4'>Login!!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{error}</p>
                <p onClick={handleForgetPassword}><Link className='text-decoration-none'>Forget Password?</Link></p>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;