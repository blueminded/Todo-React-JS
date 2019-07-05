import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import auth from './auth.js'
export const ProtectedRoute = ({component: Component, ...rest})=>{
    return (
        <Route {...rest} render={
            (props) => {
                if(auth.isAuthenticate()){
                    return <Component {...props} />
                }else{
                    return <Redirect to={
                        {
                            pathname:"/login",
                            state:{
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    );
}