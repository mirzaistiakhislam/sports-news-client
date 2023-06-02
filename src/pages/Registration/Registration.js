import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Registration = () => {

    const { createUser, googleLogin, updateUser, verifyEmail } = useContext(AuthContext);

    // const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;

                setError('');
                form.reset();
                handleUpdateProfile(name, photoURL);
                emailVerification();
                toast('Good Job! Now please verify your email', {
                    icon: '👏',
                });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }

    const emailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleTermsAndConditions = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <h2 className='text-center py-4'>Registration!!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="PhotoURL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleTermsAndConditions}
                        type="checkbox"
                        label={<>Accept <Link to="/termsandconditions">Terms and Conditions</Link></>} />
                </Form.Group>

                <p className='text-danger'>{error}</p>

                <Button variant="primary" type="submit" className='w-100 mb-2' disabled={!accepted}>
                    Register
                </Button> <br />

                <Button onClick={handleGoogleLogin} variant="dark" type="submit" className='w-100'>
                    Continue With Google
                </Button>
            </Form>
        </div>
    );
};

export default Registration;