// import libs
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
// import components
import routes from "./routes";
import PublicRoute from "./Public";

import InfoRoute from "../Info/layouts/InfoRoute";
// import MemberRoute from "../Member/layouts/MemberRoute";
import NoMatch from "../Info/pages/Error/NoMatch";
import ErrorBoundary from "../Info/pages/Error/ErrorBoundary";
function Routes() {
    return (
        <Router>
            <ErrorBoundary>
                <Switch>
                    {routes.map((route, i) => {
                        if (route.layout == "info") {
                            return <InfoRoute key={i} {...route} />;
                        }
                        // if (route.layout == "member") {
                        //     return <MemberRoute key={i} {...route} />;
                        // }
                       
                        return <PublicRoute key={i} {...route} />;
                    })}
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </ErrorBoundary>
            <NotificationContainer />
        </Router>
    );
}

export default Routes;
