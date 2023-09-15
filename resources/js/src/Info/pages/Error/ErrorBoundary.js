import React, { Component } from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <>
                    <div className="text-center m-2 bg-white">
                        <p className="m-auto text-center">
                            <div className="w-56 h-60 bg-slate-400 animate-pulse mb-3"></div>

                            <div className="  pl-2 pt-2 text-center py-2">
                               <div className="bg-gray-400 animate-pulse w-80 h-10 mb-3"></div>
                               <div className="bg-gray-400 animate-pulse w-80 h-10"></div>
                            </div>
                        </p>

                        <i className="fas fa-exclamation-circle fa-6x text-red-500 shadow-sm rounded-full"></i>
                        <h2 className="text-base md:text-xl lg:text-2xl mt-1 text-rose-500 font-semibold">
                            ขออภัย! หน้าเพจนี้ไม่พร้อมให้บริการชั่วคราว
                            กรุณาลองใหม่ในภายหลัง
                        </h2>

                        <h2
                            className="text-sm lg:text-base text-gray-600 font-medium w-36 flex text-center m-auto my-2
                            cursor-pointer
                            "
                            onClick={() => location.reload()}
                        >
                            <i className="fas fa-redo fa-md"></i>&nbsp; ลองใหม่
                        </h2>

                        <div className="border-b-2 border-gray-50 my-1"></div>
                        {/* <hr /> */}
                        <a href={`/home`}>
                            <h2 className="text-sm lg:text-base text-gray-700 font-medium w-36 flex text-center m-auto ">
                                <i className="fas fa-home fa-md"></i>&nbsp;
                                กลับหน้าหลัก
                            </h2>
                        </a>
                      
                    </div>
                </>
            );
        }
        return this.props.children;
    }
}
