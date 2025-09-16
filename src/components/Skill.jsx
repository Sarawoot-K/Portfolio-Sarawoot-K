import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

function Skill() {
  return (
    <div className=" w-full md:w-1/2">
      <div className=" m-6">
        <div className="text-3xl text-center">ทักษะและความเชี่ยวชาญ</div>
        <div>
          <p className="text-center text-xl p-6">
            Full Stack Developer <br />
            ติวเตอร์ วิทยาศาตร์/ชีววิทยา, พิธีกร และ สันทนาการฯ
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 p-3">
          <div>
            <Badge>
              <p className="text-[14px]">Communication</p>
            </Badge>
          </div>
          <div>
            <Badge>
              <p className="text-[14px]">Collaboration & Teamwork</p>
            </Badge>
          </div>
          <div>
            <Badge>
              <p className="text-[14px]">Problem-Solving</p>
            </Badge>
          </div>
          <div>
            <Badge>
              <p className="text-[14px]">Time Management</p>
            </Badge>
          </div>
          <div>
            <Badge>
              <p className="text-[14px]">Creativity</p>
            </Badge>
          </div>
          <div>
            <Badge>
              <p className="text-[14px]">Patience & Adaptability</p>
            </Badge>
          </div>
        </div>
      </div>
      <div className="m-6">
        <div className="">
          <p className="text-xl text-red-800">ประสบการณ์</p>
          <p className="text-2xl">ประวัติการณ์ทำงาน</p>
        </div>
        <div className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-xl">Generation Thailand</p>
              </AccordionTrigger>
              <AccordionContent>
                <p>Internship at Generation thailand in 2025</p>
                <div className=" flex justify-center">
                  <img
                    src="/img/image (1).png"
                    alt="generation"
                    className="max-w-80"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="text-xl">D Tutor</p>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Freelance Tutor | 2018-present
                  <br />
                  online section & onsite section
                </p>
                <div className=" flex justify-center">
                  <img
                    src="/img/29FBEB4A-45A2-426C-919A-1F75AFCD08A2 (1).png"
                    alt="Dtutor"
                    className="shadow-xl rounded-4xl w-50"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p className="text-xl text-gray-400">Coming Soon ...</p>
              </AccordionTrigger>
              <AccordionContent>
                <p>detail</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Skill;
