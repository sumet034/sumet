//import libs
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import FooterSection from "../components/Sections/FooterSection";
import Header from "./Header";
import ButtonScrollToTop from "../components/ButtonScrollToTop";

function InfoLayout({ children }) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                {/* <meta name="description" content="Helmet helps me out a lot with SEO." /> */}
                <meta
                    name="description"
                    content={`order soat`}
                />
                <meta property="og:locale" content="th_TH" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`main - Order SOAT`}
                />
                <meta
                    property="og:description"
                    content={`Order_SOAT`}
                />
                <meta property="og:url" content={window.location.href} />
                <link rel="canonical" href={window.location.href} />
                <meta
                    property="og:site_name"
                    content={`${window.config.coopNameTH}`}
                />
            </Helmet>
            {/* เมนูต่าง ๆ */}
            <Header />
            <div className="min-h-screen">{children}</div>
            <ButtonScrollToTop />
            <FooterSection />
        </>
    );
}

const displayName = "Info Layout";
const propTypes = {
    children: PropTypes.node.isRequired,
};

InfoLayout.dispatch = displayName;
InfoLayout.propTypes = propTypes;

export default InfoLayout;
