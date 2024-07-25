import React, { useEffect, Fragment } from "react";
import AOS from "aos";
export default function Myskills() {
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

    const Skill = [
        {
            src: "/mediafiles/react.svg",
            title: "react",
        },
        {
            src: "/mediafiles/laravel.svg",
            title: "Laravel",
        },
        {
            src: "/mediafiles/js.svg",
            title: "Javacript",
        },
        {
            src: "/mediafiles/jquery.svg",
            title: "Jquery",
        },
        {
            src: "/mediafiles/php.svg",
            title: "PHP",
        },
        {
            src: "/mediafiles/sql.svg",
            title: "SQL",
        },
        {
            src: "/mediafiles/html.svg",
            title: "HTML",
        },
        {
            src: "/mediafiles/css.svg",
            title: "CSS",
        },
        {
            src: "/mediafiles/mysql.svg",
            title: "MySQL",
        },
        {
            src: "/mediafiles/tailwind.svg",
            title: "Tailwind",
        },
        {
            src: "/mediafiles/bootstrap.svg",
            title: "Bootstrap",
        },

        {
            src: "/mediafiles/vscode.svg",
            title: "vs code",
        },
        {
            src: "/mediafiles/github.svg",
            title: "GIthub",
        },
        {
            src: "/mediafiles/microsoft-office.svg",
            title: "Microsoft Office",
        },
        {
            src: "/mediafiles/photoshop.svg",
            title: "Photoshop",
        },
    ];
    return (
        <section>
            <div className="mt-4 flex-row justify-center items-center text-center">
                <h1 className="text-4xl text-center mt-12" data-aos="zoom-in">
                    MY SKILL
                </h1>
            </div>
            <div className="flex flex-wrap gap-2 justify-center my-4">
                {Skill.map((value, index, array) => {
                    return (
                        <ImageIcon key={index}
                            data={{ title: value.title, src: value.src }}
                        />
                    );
                })}
            </div>
        </section>
    );
}

function ImageIcon({ data }) {
    return (
        <div className="w-fit h-fit px-4 pt-2 border-2  border-purple-500 rounded-xl grid gap-2 text-center" data-aos="zoom-in">
            <img src={data.src} className="w-24 h-24" alt={data.title} />
            <p className="mb-2">{data.title}</p>
        </div>
    );
}
