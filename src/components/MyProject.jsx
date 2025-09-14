import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const MyProject = () => {
  return (
    <div className=" w-full md:w-1/2">
      <div className=" flex flex-col flex-wrap m-6 text-2xl ">
        <div>
          <p className="text-xl text-red-800">โปรเจค</p>
          <p>ผลงาน</p>
        </div>
        <div className="p-6">
          <div className="">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardContent className="h-80">
                      <p>Whale Wash</p>
                      <p>
                        บริการซักผ้าในหอพัก
                        <br />
                        <br />
                        <br />
                        <p className="text-gray-400">Comming soon...</p>
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent className="h-80">
                      <p>Sole Whisper</p>
                      <p>
                        Project เปิดการ์ดฮีลใจ และ ลูกแก้วทำนายใจตัวเอง
                        <br />
                        <br />
                        <br />
                        <p className="text-gray-400">Comming soon...</p>
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent className="h-80">
                      <p>RagNote</p>
                      <p>
                        Notes And Post-It <br />
                        <br />
                        <br />
                        <p className="text-gray-400">Comming soon...</p>
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
