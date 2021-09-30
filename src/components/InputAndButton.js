import React, { useState } from 'react';
import Button from './Button';
import './styles/InputAndButton.css';

export default function InputAndButton({search}) {
    const buttonStyle = {
        backgroundColor: '#3F90FC',
        color: 'white',
        borderRadius: '10px',
        padding: '8px 20px',
        margin: '0 10px',
        border: 0,
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    }

    const inputStyle = {
        borderRadius: '10px',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        minWidth: '30vw'
    }

    const [val, setVal] = useState("");

    const handleChange = e => {
        setVal(e.target.value);
    }

    const handleSubmit = () => {
        search(val);
    }

    return (
        <form className="iab d-inline-flex align-items-center">
            <input value={val} onChange={handleChange} style={inputStyle} placeholder="Search here..." type="text" className="form-control shadow-none" />
            <Button href="/" onClick={handleSubmit} style={buttonStyle} color='#3F90FC'>Search</Button>
        </form>
    )
}