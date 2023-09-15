import { lazy } from "react";
import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import InfoLayout from "./InfoLayout";

export const routes = [
    {
        path: "/home",
        exact: true,
        layout: "info",
        component: lazy(() => import("../pages/Home/Home")),
    },
    {
        path: "/show/:topicId",
        exact: true,
        layout: "info",
        component: lazy(() => import("../pages/Show/Show")),
    },
    
];

const InfoRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <Suspense fallback={<> </>}>
                        {/* <ScrollToTop /> */}
                        <InfoLayout>
                            <Component {...props} />
                        </InfoLayout>
                    </Suspense>
                );
            }}
        />
    );
};

export default InfoRoute;


