import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';
import logo from '../images/navlogo.png';
import Button from "./Button";
import { UserContext } from "./App";
import { getAuth, signOut } from "@firebase/auth";

export default function Navbar({ isDash }) {

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
                    <img className="nav-image" src={logo} alt="logo.png" />
                </Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                    <Button className="mb-2 w-100 me-2" href='/login' color="#3F90FC">
                                        Login
                                    </Button>
                                    <Button className='w-100' href='/admin' color="#434141">
                                        Admin
                                    </Button>
                                </>
                            ) : (
                                <>
                                    {
                                        isDash !== "true" ? (
                                            <Button className="w-100 mb-2 me-2" href='/dashboard' color="#3F90FC">
                                                Dashboard
                                            </Button>
                                        ) : (
                                            <li className="nav-item">
                                                <h6 className="nav-link active" aria-current="page">{user.name}</h6>
                                            </li>
                                        )
                                    }
                                    <Button className="w-100" href="/" onClick={handleLogout} color="#FF0000">
                                        Logout
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