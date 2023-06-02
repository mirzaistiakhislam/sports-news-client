import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <div className='d-flex flex-row align-items-center'>
                                        <div>
                                            <Link to="/profile">
                                                {
                                                    user.photoURL === null ?
                                                        <FaUserCircle size={25} color="white"></FaUserCircle>
                                                        :
                                                        <img
                                                            className='rounded-circle my-auto d-block'
                                                            width={35}
                                                            height={35}
                                                            src={user.photoURL}
                                                            alt='Profile Pic'
                                                        />

                                                }
                                            </Link>

                                        </div>
                                        <div className='ms-2'>
                                            <Link onClick={handleLogout}>Logout</Link>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <Link to="/login">Login</Link>
                                        <Link to="/registration">Registration</Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;