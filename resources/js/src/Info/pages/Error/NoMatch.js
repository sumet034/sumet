import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function NoMatch() {
    return (
        <Fragment>
            <div className="text-center m-2 bg-white">
                <h1 className="m-auto text-center">
                    <div className="bg-gray-400 w-80 h-80 animate-pulse">
                    </div>
                </h1>

                <i className="fas fa-exclamation-circle fa-6x text-red-500 shadow-sm rounded-full"></i>
                <h1 className="text-base md:text-xl lg:text-2xl mt-1 text-rose-500 font-semibold">
                    ขออภัย!ไม่พบหน้าเว็บไซต์ที่ค้นหา...
                </h1>

                <Link to={`/home`}>
                    <h1 className="text-sm lg:text-base text-gray-700 font-medium w-36 flex text-center m-auto ">
                        <i className="fas fa-home fa-md"></i>&nbsp; กลับหน้าหลัก
                    </h1>
                </Link>
            </div>
        </Fragment>
    );
}

export default NoMatch;
