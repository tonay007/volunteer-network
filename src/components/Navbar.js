import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';
import logo from '../images/navlogo.png';
import Button from "./Button";
import { UserContext } from "./App";
import { getAuth, signOut } from "@firebase/auth";

export default function Navbar() {

    const [user, setUser] = useContext(UserContext);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth);
        setUser({});
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo.png" width="200px" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Donation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Blog</Link>
                        </li>
                        {
                            !user.isSignedIn ? (
                                <>
                                    <Button href='/login' color="#3F90FC">
                                        Login
                                    </Button>
                                    <Button href='/admin' color="#434141">
                                        Admin
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button onClick={handleLogout} color="#FF0000">
                                        Logout
                                    </Button>
                                    <Button href='/dashboard' color="#3F90FC">
                                        Dashboard
                                    </Button>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}