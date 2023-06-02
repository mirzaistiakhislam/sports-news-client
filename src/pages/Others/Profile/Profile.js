import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';

const Profile = () => {

    const { user, updateUser, setLoading } = useContext(AuthContext);
    // console.log(user);

    const nameRef = useRef(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updateName = nameRef.current.value;
        const updatePhotoURL = photoURLRef.current.value;
        console.log(updatePhotoURL, updateName);

        const profile = {
            displayName: updateName,
            photoURL: updatePhotoURL
        }
        updateUser(profile)
            .then(() => {
                toast.success('Profile updated successfully');
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" name='name' defaultValue={user.displayName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' defaultValue={user.email} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control ref={photoURLRef} type="text" name='photoURL' defaultValue={user.photoURL} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default Profile;