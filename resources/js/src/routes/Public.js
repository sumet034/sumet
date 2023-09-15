import React, { Suspense,Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <Suspense fallback={<Fragment> </Fragment>}>
                        <Component {...props} />
                    </Suspense>
                );
            }}
        />
    );
};

PublicRoute.propTypes = {
    component: PropTypes.object.isRequired,
    location: PropTypes.object
};

export default PublicRoute;
