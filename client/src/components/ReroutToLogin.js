import {Redirect} from "react-router-dom";
import React from "react";

export const ReroutToLogin = (props) =>{
    return(
        <Redirect to="/sign-in" setUser={props.setUser}/>
    )
}
