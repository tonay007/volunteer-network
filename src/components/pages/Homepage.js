import Events from 'components/Events';
import Header from 'components/Header';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../styles/Homepage.css';
import eventsData from 'data/events';

export default function Homepage() {

    const [data, setData] = useState(eventsData);

    const search = (key) => {
        const _data = eventsData.filter(data => data.name.toLowerCase().includes(key.toLowerCase()));
        setData(_data)
    }

    return (
        <div className="homepage">
            <div className="mask">
                <div className="container">
                    <Navbar isDash="false"></Navbar>
                    <Header search={search}></Header>
                    <Events data={data}></Events>
                </div>
            </div>
        </div>
    )
}