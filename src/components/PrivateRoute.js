import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './App';

export default function PrivateRoute({ children, ...rest }) {
    const [user] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.isSignedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}