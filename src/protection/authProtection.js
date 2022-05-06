import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const isAuth = WrappedComponent => props => {
    const {user} = useSelector(state=>state.auth)

    return (
        user ? (<Redirect to="/account/login" />) : (<WrappedComponent {...props}/>)
    )
}

export const withAuth = WrappedComponent => props => {
    const {user} = useSelector(state=>state.auth)

    return (
        user ? (<WrappedComponent {...props}/>) : (<Redirect to="/account/login" />)
    )
}
