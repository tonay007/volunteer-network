import React from 'react'
import { Link } from 'react-router-dom'

export default function Button (props) {
    const {href, color, children, ...rest} = props;
    const style = {
        backgroundColor: color,
        color: 'white',
        borderRadius: '5px',
        padding: '8px 40px',
        margin: '0 10px', 
        border: 0
    }
    return (
        <Link to={href}>
            <button style={style} {...rest}>
                {children}
            </button>
        </Link>
    )
}