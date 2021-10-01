import DashboardEvents from 'components/DashboardEvents';
import Navbar from 'components/Navbar';
import React from 'react';

export default function Dashboard () {
    return (
        <div className="container">
            <Navbar isDash='true'></Navbar>
            <DashboardEvents></DashboardEvents>
        </div>
    );
};