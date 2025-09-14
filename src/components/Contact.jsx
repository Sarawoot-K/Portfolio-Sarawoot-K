import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col w-full md:w-1/2 gap-3 m-10">
      <div>
        <Card>
          <div className="text-center">
            <div className="text-5xl p-3">Jay Sarawoot</div>
            <div className="flex justify-center p-3">
              <img
                src="/img/img29061.jpg"
                className="w-30 h-40 rounded-3xl"
                alt="profile"
              ></img>
            </div>
            <div className=" text-center m-3">
              <p className="text-4xl">ศราวุธ คำขาด</p>
              <p className="">(Sarawoot Khumkhat)</p>
              <div className="text-3xl flex flex-col items-center p-3 text-red-800">
                <p>"เป็ดที่ดีคือ เป็ดPro(fessional)"</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div >
        <Card>
          <div className="flex flex-col gap-3 text-center">
            <div className="rounded-2xl p-4">
              <p>ส่งอีเมลล์ : </p> Sarawoot.Kk27@gmail.com
            </div>
            <div className="rounded-2xl p-4">
              <p>
                ผมเป็นโปรแกรมเมอร์มือใหม่ไฟแรงที่พร้อมลุยงาน
                และพร้อมเรียนรู้เพื่อพัฒนาตนเองไปพร้อมๆกับองค์กร
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-3">
                <div>
                  <Button variant="outline" className="btn cursor bg-red-800 text-white">
                    <a href="https://www.linkedin.com/in/sarawoot-khumkhat/">
                      link-in
                    </a>
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="btn cursor  bg-red-800 text-white">
                    <a href="https://line.me/ti/p/KHUJwV-TTw">line</a>
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="btn cursor  bg-red-800 text-white">
                    <a href="https://www.facebook.com/share/17PzJLtxoK/?mibextid=wwXIfr">
                      Facebook
                    </a>
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="btn cursor  bg-red-800 text-white">
                    <a href="mailto:Sarawoot.Kk27@gmail.com">E-mail</a>
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="btn cursor  bg-red-800 text-white">
                    <a href="https://drive.google.com/file/d/1sspiO3JO-TBhDodMYDPusJsfKSJJqy5R/view?usp=drive_link">
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="p-8">2025, ศราวุธ คำขาด</p>
              <img
                src="/img/imgduck.png"
                className="w-[50px] h-[50px] m-6"
                alt="Duck image"
              ></img>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
