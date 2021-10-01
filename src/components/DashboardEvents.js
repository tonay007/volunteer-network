import { LinearProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './App';
import DashboardEvent from './DashboardEvent';

export default function DashboardEvents() {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [user] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/events?email=' + user.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            });
    }, [user.email])

    return (
        <div className="row">
            {!loading ? (
                data.length > 0 ?
                    data.map(event => <DashboardEvent id={event._id} date={event.date} key={event._id} name={event.event}></DashboardEvent>)
                    :
                    <h3 className="text-primary text-center">You have no any events registered</h3>
            ) : (
                <LinearProgress />
            )
            }
        </div>
    );
};