import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h2 className="mt-5 mb-4">Please Login</h2>
            <button className="btn btn-warning" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;


