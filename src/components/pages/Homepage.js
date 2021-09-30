import Events from 'components/Events'
import Header from 'components/Header'
import React from 'react'
import Navbar from '../Navbar'
import '../styles/Homepage.css'

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="mask">
                <div className="container">
                    <Navbar></Navbar>
                    <Header></Header>
                    <Events></Events>
                </div>
            </div>
        </div>
    )
}