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
                    <CardContent className="min-h-80">
                      <p className="text-red-700">RagNote</p>
                      Notes And Post-It <br />
                      <div className="p-2 flex flex-col items-center">
                        <br />
                        <img
                          src="/img/Ragnote.JPG"
                          className="rounded-2xl"
                        />
                        <a
                          href="https://rag-notes-frontend-nine.vercel.app/profile/68c97617212858c5363b2e2d"
                          className="flex justify-center"
                        >
                          <img
                            src="/img/Capture.JPG"
                            className="rounded-xl p-2 w-1/2"
                          ></img>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent className="min-h-80">
                      <p className="text-red-700">Sole Whisper</p>
                      <div>
                        Project เปิดการ์ดฮีลใจ และ ลูกแก้วทำนายใจตัวเอง
                        <br />
                        <br />
                        <div className="flex justify-center gap-5">
                          <img
                            src="/img/Home (1).png"
                            className="rounded-2xl w-40"
                          />
                          <img
                            src="/img/ChatGPT Image Jul 24, 2025, 02_52_05 PM.png"
                            className="rounded-2xl w-50 h-51"
                          />
                        </div>
                        <br />
                        <p className="text-gray-400 text-center">
                          Comming soon...
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent className="h-80">
                      <p className="text-red-700">Whale Wash</p>
                      <p>บริการซักผ้าในหอพัก</p>
                      <br />
                      <div className="flex justify-center">
                        <img
                          src="/img/Whale wash2.png"
                          className="rounded-2xl shadow-xl w-40"
                        />
                      </div>
                      <br />
                      <p className="text-gray-400 text-center">
                        Comming soon...
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
