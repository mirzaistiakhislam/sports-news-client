import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Don't Worry!! Accept all the terms and conditions, without any hesitation. Thank you!!</h2>
            <h3>Go to</h3><Link to="/registration">Registration</Link>
        </div>
    );
};

export default TermsAndConditions;