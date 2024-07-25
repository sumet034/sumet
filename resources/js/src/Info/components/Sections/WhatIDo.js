import React, { useEffect } from 'react'
import AOS from 'aos';
export default function WhatIDo() {
    useEffect(() => {
        AOS.init({
            offset: 200, // ระยะห่าง (เป็นพิกเซล) จากจุดเริ่มต้นของการกระตุ้น
            delay: 100, // ระยะเวลาหน่วง (เป็นมิลลิวินาที) ก่อนที่แอนิเมชันจะเริ่มต้น
            duration: 600, // ระยะเวลา (เป็นมิลลิวินาที) ของแอนิเมชัน
            easing: 'ease-in-out', // ฟังก์ชันการผ่อนคลายที่ใช้กับแอนิเมชัน
            once: true, // กำหนดว่าแอนิเมชันควรเกิดขึ้นเพียงครั้งเดียว
            mirror: false, // กำหนดว่าองค์ประกอบควรแอนิเมชันออกเมื่อเลื่อนผ่านพวกมัน
            anchorPlacement: 'top-center', // กำหนดตำแหน่งขององค์ประกอบที่สัมพันธ์กับหน้าต่างที่ควรกระตุ้นแอนิเมชัน
        });
    }, []);
    return (
        <section>
            <h1 className='text-4xl mt-12 text-center' data-aos='zoom-in'>WHAT I DO</h1>
            <div className="mt-4 flex-row md:flex gap-6 justify-center items-center text-center">
                <CardTodo data={{ title: 'FONT END', datail: 'As a JavaScript developer, I have experience in HTML5 and CSS3, utilizing techniques with jQuery and more advanced frameworks such as React.' }} />
                <CardTodo data={{ title: 'BACK END', datail: 'I have experience using Laravel as a PHP backend to develop APIs, to creating efficient  applications.' }} />
                <CardTodo data={{ title: 'DATABASE', datail: 'I have experience managing databases with Plesk and MySQL, and I also have experience using Oracle.' }} />
            </div>
        </section>
    )
}


function CardTodo({ data }) {
    return (
        <div data-aos='zoom-in'
            className="h-60 w-56 border-2 border-[#4b1e8580] rounded-[1.5em] bg-gradient-to-br from-[#4b1e85] to-[#4b1e8503] text-white font-nunito px-3 py-1 flex justify-start items-center flex-col gap-[0.75em] backdrop-blur-[12px]"
        >
            <div>
                <h1 className="text-[2em] font-medium text-center">{data.title}</h1>
                <p className="text-md text-start break-words">
                    {data.datail}
                </p>
            </div>
        </div>

    );
}