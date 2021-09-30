import React from 'react';
import Event from './Event';

export default function Events({ data }) {
    return (
        <div className="row text-center">
            {data.length ?
                data.map(event => <Event key={event.id} title={event.name} image={event.image} color={event.color}></Event>) :
                <h3 className="text-danger text-center">No events matched with the search</h3>
            }
        </div>
    )
}