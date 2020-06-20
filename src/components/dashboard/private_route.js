import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({
    user,
    component: Comp,
    auth,
    ...rest
}) => {
    return <Route {...rest} component={(props)=>(
        user ? 
            <Comp {...props} auth={auth} user={user}/>
        :
        <Redirect to="/login"/>
    )}/>
}

export default PrivateRoute