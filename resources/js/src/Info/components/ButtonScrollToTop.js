import React, { Fragment } from "react";

function ButtonScrollToTop() {
    const ToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <Fragment>
            <div className="fixed bottom-4 right-5 z-10">
                <div
                    onClick={ToTop}
                    className="rounded-full py-1 w-9 bg-[#DDFFC1] shadow-md text-center m-auto cursor-pointer border-2 border-[#0E610E] hover:bg-gray-50 hover:text-[#3CCF4E]"
                >
                    <i className="fas fa-chevron-up fa-lg text-[#0E610E]"></i>
                </div>
            </div>
        </Fragment>
    );
}

export default ButtonScrollToTop;
