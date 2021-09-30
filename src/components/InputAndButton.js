import React from 'react';
import Button from './Button';
import './styles/InputAndButton.css';

export default function InputAndButton() {
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

    return (
        <div className="iab d-inline-flex align-items-center">
            <input style={inputStyle} placeholder="Search here..." type="text" className="form-control shadow-none" />
            <Button href='/' style={buttonStyle} color='#3F90FC'>Search</Button>
        </div>
    )
}