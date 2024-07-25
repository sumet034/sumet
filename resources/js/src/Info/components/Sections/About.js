import React, { useEffect } from "react";
import AOS from "aos";
export default function About() {
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
        <section className="snap-center h-screen">
            <p className="text-4xl text-center mt-12" data-aos="zoom-in">
                ABOUT ME
            </p>
            <div
                className=" flex justify-around flex-wrap"
                data-aos="zoom-in"
            >
                <div className="grid place-content-center">
                    <p data-aos="zoom-in" className="text-xl">
                        My name is
                    </p>
                    <p data-aos="zoom-in">Sumet Hongnak</p>
                    <p data-aos="zoom-in" className="text-xl">
                        Email
                    </p>
                    <p data-aos="zoom-in">bbgv17@gmail.com</p>
                    <p className="text-xl">Location</p>
                    <p>Bangkok ramintra</p>
                </div>
                <div className="grid place-content-center">
                    <p className="text-xl">Education</p>
                    <p>Vocational Certificate (2014-2017)</p>
                    <p>Saraburi Technical College</p>
                    <p>Electronic (GPA 3.16)</p>
                    <p>High Vocational Certificate (2017-2019)</p>
                    <p>Saraburi Technical College</p>
                    <p>Industrial Electronics (GPA 3.61)</p>
                    <p>Bachelor of Engineering (2019-2022)</p>
                    <p>Rajamangala University of Technology Thanyaburi </p>
                    <p>Computer Engineering (GPA 2.53)</p>
                </div>
            </div>
        </section>
    );
}
