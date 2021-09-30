import eventsData from 'data/events';
import React from 'react';
import Event from './Event';

export default function Events () {
    return (
        <div className="row text-center">
            {
                eventsData.map(event => <Event key={event.id} title={event.name} image={event.image} color={event.color}></Event>)
            }
        </div>
    )
}