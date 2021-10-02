import { CircularProgress } from '@mui/material';
import eventsData from 'data/events';
import React, { useState } from 'react';

export default function DashboardEvent({ id, name, date }) {

    const event = eventsData.find(event => event.name === name);

    const newDate = date.split("T")[0];

    const [loading, setLoading] = useState(false);

    const cancelEvent = (e) => {
        setLoading(true)
        fetch(`https://obscure-escarpment-92866.herokuapp.com/cancel/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                if (result) {
                    e.target.parentNode.parentNode.parentNode.style.display = "none";
                };
            });
    };

    return (
        <div className="col-12 col-md-6">
            <div className="m-2 d-flex shadow rounded">
                <div style={{ width: "40%" }}>
                    <img src={event.image} alt={event.name} className="m-3 img-fluid" />
                </div>
                <div className="p-5" style={{ width: "60%" }}>
                    <h5 className="mb-4">{event.name}</h5>
                    <h6 className="mb-5">Date: {newDate}</h6>
                    {
                        !loading ? (
                            <button onClick={cancelEvent} className="btn btn-danger shadow-none">Cancel</button>
                        ) : (
                            <CircularProgress></CircularProgress>
                        )
                    }
                </div>
            </div>
        </div>
    );
};