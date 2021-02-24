import React from 'react';
import { Route } from 'react-router-dom';
import authVerificated from './authVerificated';


const PrivateRoute = ({ component: Component, ...res }) => {
    return (
        <Route
            {...res}
            component ={(props)=>(
                authVerificated()
                ? (<Component {...props}/>)
                : (window.location.href = 'https://cidi.test.cba.gov.ar/Cuenta/Login?app=455')
            )}
        />
    )
};

export default PrivateRoute;