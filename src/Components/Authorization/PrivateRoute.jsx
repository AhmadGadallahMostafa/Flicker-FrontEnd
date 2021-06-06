// React Router works by rendering the components in the Routes with every change in route but this Comp will stop this to happen 
// If the user is not logged in ( that will cause an error if there is no user logged in as the currentUser value will be Null)
import React from 'react'
import {Redirect, Route } from "react-router-dom"
import {useAuth} from "./AuthProvider"
const PrivateRoute = ({component: Component , ...res}) => {
    const {currentUser} = useAuth();
    return (
        <Route 
        {...res}
        render={props => {
           return currentUser ? <Component {...props} /> : <Redirect to="/home"/>

        }}
        >

        </Route>
    )
}

export default PrivateRoute;
