import React, {Component} from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index"

//HOC: Pattern High Order Component
const AdminRoute = ({ componet: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.role === 1 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state:{ from: props.location }
                    }}
                />
            )
        }
    />
);

export default AdminRoute;
