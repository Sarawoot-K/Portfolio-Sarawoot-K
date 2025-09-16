import React from "react";
import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Blog = () => {
  return (
    <div className="w-full md:w-1/2">
      <div className=" flex flex-col flex-wrap m-6 text-2xl ">
        <div className="m-3">
          <p className="text-xl text-red-800">Blog</p>
          <p>บทความ</p>
        </div>
        <Card>
          <Accordion type="single" collapsible className="w-full p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-xl">
                  จริงไหม?"มนุษย์เป็ด" กำลังจะถูกปัญญาประดิษฐ์ (AI)
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-justify px-8 indent-10">
                  คำถามที่ว่าบุคลากรที่มีทักษะหลากหลายหรือที่เรียกว่า
                  "มนุษย์เป็ด" กำลังจะถูกปัญญาประดิษฐ์ (AI)
                  เข้ามาทดแทนจนหมดความต้องการในตลาดแรงงานหรือไม่นั้น
                  เป็นความเข้าใจที่คลาดเคลื่อนจากความเป็นจริง
                  การวิเคราะห์เชิงลึกพบว่าความสามารถของ AI
                  ไม่ได้มุ่งเป้าไปที่การ "แทนที่" มนุษย์อย่างสมบูรณ์ แต่เป็นการ
                  "เสริมศักยภาพ" (Augmentation)
                  เพื่อปลดปล่อยมนุษย์จากงานที่ซ้ำซ้อนและคาดเดาได้
                  ให้สามารถมุ่งเน้นไปที่บทบาทเชิงกลยุทธ์ที่ต้องอาศัยทักษะความเป็นมนุษย์ที่
                  AI ไม่สามารถเลียนแบบได้
                </p>
                <p p className="text-justify px-8 indent-10">
                  คำถามที่ว่า "มนุษย์เป็ด"
                  จะไม่เป็นที่ต้องการของตลาดแรงงานอีกต่อไปเพราะ AI
                  ทำแทนได้ทุกอย่างนั้นเป็นความเข้าใจที่คลาดเคลื่อนอย่างสิ้นเชิง
                  การวิเคราะห์เชิงลึกชี้ให้เห็นว่าในความเป็นจริงแล้ว
                  ปัญญาประดิษฐ์ไม่ได้เข้ามาเพื่อ "แทนที่" แต่เข้ามาเพื่อ
                  "สร้างเสริม" คุณค่าของมนุษย์
                </p>
                <p p className="text-justify px-8 indent-10">
                  ในขณะที่ AI สามารถทำงานที่ซ้ำซ้อนและคาดเดาได้
                  มนุษย์ก็ถูกปลดปล่อยให้มีอิสระมากขึ้นในการมุ่งเน้นไปที่ทักษะที่จำเป็นอย่างยิ่งในการแก้ปัญหาในโลกที่ซับซ้อนมากขึ้นทุกวัน
                  ทักษะเหล่านี้ได้แก่ ความสามารถในการคิดวิเคราะห์เชิงบูรณาการ
                  ความคิดสร้างสรรค์ที่แท้จริง
                  และที่สำคัญที่สุดคือทักษะเชิงมนุษย์ในการสร้างความสัมพันธ์และความไว้วางใจ
                </p>
                <p p className="text-justify px-8 indent-10">
                  ดังนั้น อนาคตไม่ได้เป็นของ AI เพียงอย่างเดียว แต่เป็นของ
                  “Likable Polymath” —
                  บุคลากรที่สามารถเชื่อมโยงแนวคิดที่แตกต่างกัน
                  นำทีมที่ทำงานร่วมกันได้อย่างมีประสิทธิภาพ และใช้ AI
                  เป็นพันธมิตรเชิงกลยุทธ์ พวกเขาเหล่านี้จะไม่ถูกแทนที่โดย AI
                  แต่จะกลายเป็นผู้ที่สามารถใช้เทคโนโลยีนี้เพื่อสร้างสรรค์คุณค่าที่ไม่เคยมีมาก่อน
                  และเป็นผู้กำหนดทิศทางของโลกการทำงานในอนาคต
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="text-xl text-gray-400">
                  Comming Soon...
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-justify px-8 indent-10">
                  detail
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
