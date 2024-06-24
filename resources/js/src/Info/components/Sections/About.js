import React, { useEffect } from 'react'
import AOS from 'aos'
export default function About() {
    useEffect(() => {
        AOS.init({
            offset: 200, // ระยะห่าง (เป็นพิกเซล) จากจุดเริ่มต้นของการกระตุ้น
            delay: 100, // ระยะเวลาหน่วง (เป็นมิลลิวินาที) ก่อนที่แอนิเมชันจะเริ่มต้น
            duration: 600, // ระยะเวลา (เป็นมิลลิวินาที) ของแอนิเมชัน
            easing: 'ease-in-out', // ฟังก์ชันการผ่อนคลายที่ใช้กับแอนิเมชัน
            once: false, // กำหนดว่าแอนิเมชันควรเกิดขึ้นเพียงครั้งเดียว
            mirror: false, // กำหนดว่าองค์ประกอบควรแอนิเมชันออกเมื่อเลื่อนผ่านพวกมัน
            anchorPlacement: 'top-bottom', // กำหนดตำแหน่งขององค์ประกอบที่สัมพันธ์กับหน้าต่างที่ควรกระตุ้นแอนิเมชัน
        });
    }, []);
    return (
        <section>
            <div className="h-screen bg-[#262D47]  flex justify-center items-center">
                <div className='w-48 h-48 rounded-lg bg-blue-700' data-aos='zoom-in'></div>
            </div>
        </section>
    )
}
