import React, { Fragment, useEffect } from 'react';
import AOS from "aos";

export default function Main() {
    useEffect(() => {
        AOS.init({
            offset: 200, // ระยะห่าง (เป็นพิกเซล) จากจุดเริ่มต้นของการกระตุ้น
            delay: 100, // ระยะเวลาหน่วง (เป็นมิลลิวินาที) ก่อนที่แอนิเมชันจะเริ่มต้น
            duration: 600, // ระยะเวลา (เป็นมิลลิวินาที) ของแอนิเมชัน
            easing: 'ease-in-out', // ฟังก์ชันการผ่อนคลายที่ใช้กับแอนิเมชัน
            once: true, // กำหนดว่าแอนิเมชันควรเกิดขึ้นเพียงครั้งเดียว
            mirror: false, // กำหนดว่าองค์ประกอบควรแอนิเมชันออกเมื่อเลื่อนผ่านพวกมัน
            anchorPlacement: 'top-bottom', // กำหนดตำแหน่งขององค์ประกอบที่สัมพันธ์กับหน้าต่างที่ควรกระตุ้นแอนิเมชัน
        });
    }, []);
    return (
        <Fragment>
            <div className="min-h-screen bg-[#13072F]  grid grid-cols-2">
                <div className="grid-cols-1 text-white place-content-center place-items-center">
                    <p className='font-lg sm:text-lg md:text-3xl text-center  pt-6'>Welcome to My Website</p>
                    <p className='text-center'>Explore My Projects and Skills </p>
                    <p className='text-center'>Contact Me for Collaboration Opportunities!</p>
                </div>
                <div className="grid-cols-1 flex justify-center items-center">
                    <div class="cardx">
                        <img className='cardx h-[60%] object-cover' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="iamge" srcset="" data-aos="zoom-in" />
                    </div>
                </div>

            </div>
            <div className="h-screen bg-[#f73605] flex justify-center items-center">
                <div className='w-48 h-48 rounded-lg bg-white' data-aos='zoom-in'></div>
            </div>
        </Fragment>
    );
}

// export default Main;