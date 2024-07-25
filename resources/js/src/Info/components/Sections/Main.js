import React, { Fragment, useEffect } from "react";
import AOS from "aos";

export default function Main() {
    useEffect(() => {
        AOS.init({
            offset: 200, // ระยะห่าง (เป็นพิกเซล) จากจุดเริ่มต้นของการกระตุ้น
            delay: 100, // ระยะเวลาหน่วง (เป็นมิลลิวินาที) ก่อนที่แอนิเมชันจะเริ่มต้น
            duration: 600, // ระยะเวลา (เป็นมิลลิวินาที) ของแอนิเมชัน
            easing: "ease-in-out", // ฟังก์ชันการผ่อนคลายที่ใช้กับแอนิเมชัน
            once: true, // กำหนดว่าแอนิเมชันควรเกิดขึ้นเพียงครั้งเดียว
            mirror: false, // กำหนดว่าองค์ประกอบควรแอนิเมชันออกเมื่อเลื่อนผ่านพวกมัน
            anchorPlacement: "top-bottom", // กำหนดตำแหน่งขององค์ประกอบที่สัมพันธ์กับหน้าต่างที่ควรกระตุ้นแอนิเมชัน
        });
    }, []);
    return (
        <Fragment>
            <div className="mt-4 max-w-7xl mx-auto grid grid-cols-2 place-content-around snap-start">
                <div
                    className="grid-cols-1 text-white place-content-center"
                    data-aos="zoom-in"
                >
                    <p className="font-lg sm:text-lg md:text-3xl text-center  pt-6">
                        Welcome to My Website
                    </p>
                    <p className="text-center">
                        Explore My Projects and Skills{" "}
                    </p>
                    <p className="text-center">
                        Contact Me for Collaboration Opportunities!
                    </p>
                </div>

                <div className="grid-cols-1 flex justify-center items-center ">
                    <img
                        className="object-cover w-auto h-3/6 rounded-xl shadow-lg"
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="iamge"
                        srcSet="
                            https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 480w,
                            https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 800w,
                            https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1200w,
                            https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1887w
                        "
                        sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1887px"
                        data-aos="zoom-in"
                    />
                </div>
            </div>
        </Fragment>
    );
}

// export default Main;
