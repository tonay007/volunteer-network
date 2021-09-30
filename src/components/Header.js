import React from 'react';
import InputAndButton from './InputAndButton';
import './styles/Header.css';

export default function Header () {
    return (
        <header className="header">
            <h2 className="title">I grow by helping people in need.</h2>
            <InputAndButton></InputAndButton>
        </header>
    )
}