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
        <div className="text-2xl text-center">ทักษะและความเชี่ยวชาญ</div>
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
        <div>
          <p className="text-center text-xl p-6">
            Full Stack Developer <br />
            ติวเตอร์ วิทยาศาตร์/ชีววิทยา, พิธีกร และ สันทนาการฯ
          </p>
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
                <p className="text-2xl">Generation Thailand</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xl">
                  Internship at Generation thailand in 2025
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="text-2xl">D Tutor</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xl">
                  Freelance Tutor | 2018-present
                  <br />
                  online section & onsite section
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p className="text-2xl text-gray-500">Coming Soon ...</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xl">detail</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Skill;
