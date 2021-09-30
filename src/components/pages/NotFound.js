import Button from 'components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/navlogo.png';

export default function NotFound () {
    return (
        <div className="container mt-5 text-center">
            <Link to='/'><img className="mb-5" src={logo} alt={logo} /></Link>
            <hr />
            <h3 className='my-3 text-danger'>HTTP Error: 404</h3>
            <h6>Your requested URL couldn't be found</h6>
            <Button className="mt-4" href='/' color='#3F90FC'>Back to Home</Button>
        </div>
    )
}