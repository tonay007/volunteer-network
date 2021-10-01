/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/navlogo.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from 'components/App';
import google from '../../images/icon/google.png';
import '../styles/Login.css'

export default function Login() {

    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const [user, setUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    // @ts-ignore
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = async () => {
        const currentUser = auth.currentUser;
        if (currentUser === null) {
            await signInWithPopup(auth, provider)
                .then(res => {
                    const { displayName, email } = res.user;
                    const signedInUser = {
                        isSignedIn: true,
                        name: displayName,
                        email: email
                    }
                    setUser(signedInUser);
                    history.replace(from);
                }).catch((error) => {
                    console.log(error)
                });
        }
        else {
            const displayName = currentUser.displayName;
            const email = currentUser.email;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            setUser(signedInUser);
            history.replace(from);
        }
    }

    return (
        <div className="login container">
            <Link to='/'>
                <img className="my-5" src={logo} alt="logo.png" />
            </Link>
            <div className="login-box">
                <h5 className="mt-5 mb-5"><b>Login with</b></h5>
                <div onClick={handleLogin} className="google-btn">
                    <img src={google} alt="Google" />
                    <h6 className="m-auto">Continue with Google</h6>
                </div>
            </div>
        </div>
    );
};
