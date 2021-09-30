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
    const [date, setDate] = useState(new Date());
    return (
        <div className="register container text-left d-flex flex-column justify-content-center align-items-center">
            <Link to='/'>
                <img className="my-5" src={logo} alt="logo.png" />
            </Link>
            <div className="border rounded w-50 p-5">
                <h5 className="my-3"><b>Register in this event as a volunteer</b></h5>
                <form action="/">
                    <input required type="text" value={user.name} placeholder="Full Name" className="form-control shadow-none" />
                    <input required type="text" value={user.email} placeholder="Email Address" className="form-control shadow-none" />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Basic example"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <input required type="text" placeholder="Date" className="form-control shadow-none" ref={inputRef} {...inputProps} />
                                    {InputProps?.endAdornment}
                                </Box>
                            )}
                        />
                    </LocalizationProvider>
                    <input required type="text" placeholder="Description" className="form-control shadow-none" />
                    <input required type="text" placeholder="Event Name" value={eventName} className="form-control shadow-none" disabled />
                    <button style={{ width: '100%', fontWeight: 500, backgroundColor: '#3F90FC', border: 0, color: '#fff', padding: '10px 0' }}>Register</button>
                </form>
            </div>
        </div>
    );
};