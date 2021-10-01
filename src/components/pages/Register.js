import { UserContext } from 'components/App';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/navlogo.png';
import '../styles/Register.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { Box } from '@mui/material';

export default function Register() {

    const [user] = useContext(UserContext);
    const eventName = window.location.href.split("=")[1].replace(/%20/g, " ");

    const [error, setError] = useState("");

    const [registered, setRegistered] = useState(false);

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        date: new Date(),
        description: '',
        event: eventName
    })

    const handleChange = (e) => {
        const cloneData = { ...formData };
        cloneData[e.target.name] = e.target.value;
        setFormData(cloneData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:4000/addEvent', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(formData)
            });
            setError("");
            setRegistered(true)
        }
        catch (err) {
            setError("Registration Failed");
        };
    };

    return (
        <div className="register container text-left d-flex flex-column justify-content-center align-items-center">
            <Link to='/'>
                <img className="my-5" src={logo} alt="logo.png" />
            </Link>
            <div className="reg-box">

                {!registered ? (
                    <>
                        <h5 className="my-3"><b>Register in this event as a volunteer</b></h5>
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} name='name' required type="text" value={user.name} placeholder="Full Name" className="form-control shadow-none" />
                            <input disabled onChange={handleChange} name='email' required type="text" value={user.email} placeholder="Email Address" className="form-control shadow-none" />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Basic example"
                                    value={formData.date}
                                    onChange={newValue => {
                                        const clone = { ...formData };
                                        clone.date = newValue;
                                        setFormData(clone);
                                    }}
                                    renderInput={({ inputRef, inputProps, InputProps }) => (
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <input name='date' required type="text" placeholder="Date" className="form-control shadow-none" ref={inputRef} {...inputProps} />
                                            {InputProps?.endAdornment}
                                        </Box>
                                    )}
                                />
                            </LocalizationProvider>
                            <input onChange={handleChange} name='description' required type="text" placeholder="Description" className="form-control shadow-none" />
                            <input onChange={handleChange} name='event' required type="text" placeholder="Event Name" value={eventName} className="form-control shadow-none" disabled />
                            {
                                error && <h6 className="text-danger">{error}</h6>
                            }
                            <button style={{ width: '100%', fontWeight: 500, backgroundColor: '#3F90FC', border: 0, color: '#fff', padding: '10px 0' }}>Register</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h6 className="text-primary text-center">Registration success!</h6>
                        <Link to="/dashboard">
                            <button style={{ width: '100%', fontWeight: 500, backgroundColor: '#3F90FC', border: 0, color: '#fff', padding: '10px 0' }}>Go to dashboard</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};