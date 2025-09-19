import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

const UserProfile = () => {
  return (
    <div className=" w-full md:w-1/2">
      {/* profile */}
      <div className="m-6 text-center">
        <div className="text-7xl p-6">Jay Sarawoot</div>
        <div className="flex justify-center p-6">
          <img
            src="/img/img29061.jpg"
            className="w-60 h-80 rounded-3xl"
            alt="profile"
          ></img>
        </div>
        <p className="text-center text-2xl p-6 ">
          Full Stack Developer <br />
          Science Tutor, Recreationist and Master of Ceremonies
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div>
            <Button variant="outline" className="btn cursor bg-gray-100">
              <a href="https://www.linkedin.com/in/sarawoot-khumkhat/">
                link-in
              </a>
            </Button>
          </div>
          <div>
            <Button variant="outline" className="btn cursor bg-gray-100">
              <a href="https://line.me/ti/p/KHUJwV-TTw">line</a>
            </Button>
          </div>
          <div>
            <Button variant="outline" className="btn cursor bg-gray-100">
              <a href="https://www.facebook.com/share/17PzJLtxoK/?mibextid=wwXIfr">
                Facebook
              </a>
            </Button>
          </div>
          <div>
            <Button variant="outline" className="btn cursor bg-gray-100">
              <a href="mailto:Sarawoot.Kk27@gmail.com">E-mail</a>
            </Button>
          </div>
        </div>
      </div>
      <div className=" text-center text-2xl m-6">
        <p className="p-3">สวัสดีครับ, ผมเจ</p>
        <p className="text-5xl p-3">ศราวุธ คำขาด</p>
        <p className="p-3">(Sarawoot Khumkhat)</p>
        <p className="text-xl p-3 text-gray-500">
          เว็บไซต์นี้เป็นช่องการการแชร์เส้นทางการทำงาน <br />
          และการแบ่งปันความรู้ต่างๆของผมครับ
        </p>
        <div className="text-3xl flex flex-col items-center">
          "รักการเรียนรู้สิ่งใหม่ๆ จนกลายเป็นเป็ด และเป็ดที่ดีคือเป็ด
          Pro(fessional)"
        </div>
      </div>
      {/* badge */}
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
      </div>
      {/* target */}
      <div className=" flex m-6 gap-3">
        <div className="">
          <Card>
            <CardContent>
              <p className="flex flex-col items-center">
                <p className="p-2">
                  ผมเป็นโปรแกรมเมอร์มือใหม่ไฟแรงที่พร้อมลุยงาน
                  และพร้อมเรียนรู้เพื่อพัฒนาตนเองไปพร้อมๆกับองค์กร
                </p>
                <img
                  src="/img/fc716dff-ba0c-461a-aaf6-c84934bfc9a4.png"
                  alt="profile"
                  className="rounded-2xl max-w-40"
                />
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-3">
          <Card>
            <CardContent>
              <CardTitle>
                <p className="">ที่อยู่</p>
              </CardTitle>
              <p>แพร่,ประเทศไทย</p>
              <p className="flex flex-col items-end">
                <img
                  src="/img/image-3JYNLpogg5zknunPABpdOpEjJmZN5R.png"
                  alt="ad."
                  className="max-w-15"
                />
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle>
                <p>เป้าหมายชีวิต</p>
              </CardTitle>
              <p className="flex flex-col items-end">
                "เรียนรู้และพัฒนาเพื่อชีวิตที่ดีขึ้น
                แล้วถ่ายทอดประสบกาณ์ให้คนที่ต้องการ"
                <img
                  src="/img/image-QUD9QBFZRZ2ZYM6AV1VO3hYmCbUAq1.png"
                  alt="target"
                  className="max-w-20"
                />
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Experience */}
      <div className="m-6">
        <div className="">
          <p className="text-xl text-red-800">ประสบการณ์</p>
          <p className="text-2xl">ประวัติการณ์ทำงาน</p>
        </div>
        <div className="p-6 text-2xl">
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
      {/* project */}
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
                        <img src="/img/Ragnote.JPG" className="rounded-2xl" />
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
                    <CardContent className="h-80">
                      <p className="text-red-700">Whale Wash</p>
                      <p>บริการซักผ้าในหอพัก</p>
                      <br />
                      <div className="flex justify-center">
                        <a href="https://sprint2-project3-v2.vercel.app/">
                        <img
                          src="/img/Whale wash2.png"
                          className="rounded-2xl shadow-xl w-40"
                        /></a>
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
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      {/* technology */}
      <div className="m-6">
        <div>
          <p className="text-xl text-red-800">เทคโนโลยี</p>
          <p className="text-xl">สิ่งที่ใช้</p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <div>
              <p className="text-red-800">Business & Design</p>
            </div>
            <div>
              <ul>
                <div className="">
                  <Card>
                    <CardContent>
                      <li className="text-xl">figma</li>
                      <div>
                        <img src="" alt="" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div>
              <p className="text-red-800">Front-end</p>
            </div>
            <div>
              <ul>
                <div className="">
                  <Card>
                    <CardContent>
                      <li className="text-xl">HTML</li>
                      <div>
                        <img src="" alt="" />
                      </div>
                    </CardContent>
                    <CardContent>
                      <li className="text-xl">CSS</li>
                      <div>
                        <img src="" alt="" />
                      </div>
                    </CardContent>
                    <CardContent>
                      <li className="text-xl">Tailwind</li>
                      <div>
                        <img src="" alt="" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div>
              <p className="text-red-800">Back-end</p>
            </div>
            <div>
              <ul>
                <div className="">
                  <Card>
                    <CardContent>
                      <li className="text-xl">React</li>
                    </CardContent>
                    <CardContent>
                      <li className="text-xl">Node.js</li>
                    </CardContent>
                    <CardContent>
                      <li className="text-xl">Express</li>
                    </CardContent>
                  </Card>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div>
              <p className="text-red-800">Tool & DataBase</p>
            </div>
            <div>
              <ul>
                <div className="">
                  <Card>
                    <CardContent>
                      <div className="flex justify-between">
                        <li className="text-xl">
                          <a href="https://github.com/Sarawoot-K">Github</a>
                        </li>
                        <a href="https://github.com/Sarawoot-K">
                          <img
                            src="/img/image (3).png"
                            alt="github"
                            className="w-12"
                          />
                        </a>
                      </div>
                    </CardContent>
                    <CardContent>
                      <li className="text-xl">MonggoDB</li>
                    </CardContent>
                    <CardContent>
                      <li className="text-xl">PostgreSQL</li>
                    </CardContent>
                  </Card>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className=" m-6 flex items-center">
        <Card>
          <div className=" flex gap-3">
            <div className="w-5/9 flex flex-col gap-3 p-3">
              <div className=" p-3">
                <p>ส่งอีเมลล์ : </p> Sarawoot.Kk27@gmail.com
              </div>
              <div className=" p-3">
                ผมเป็น <br />
                Full Stack Developer,
                <br />
                ติวเตอร์ วิทยาศาตร์/ชีววิทยา,
                <br />
                พิธีกร และ สันทนาการฯ
              </div>
            </div>
            <div className="p-3">
              <div className="h-2/3 flex items-center">
                <div className="flex flex-wrap justify-center gap-2">
                  <div>
                    <Button
                      variant="outline"
                      className="btn cursor bg-red-800 text-white"
                    >
                      <a href="https://www.linkedin.com/in/sarawoot-khumkhat/">
                        link-in
                      </a>
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      className="btn cursor bg-red-800 text-white"
                    >
                      <a href="https://line.me/ti/p/KHUJwV-TTw">line</a>
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      className="btn cursor bg-red-800 text-white"
                    >
                      <a href="https://www.facebook.com/share/17PzJLtxoK/?mibextid=wwXIfr">
                        Facebook
                      </a>
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      className="btn cursor bg-red-800 text-white"
                    >
                      <a href="https://drive.google.com/file/d/1sspiO3JO-TBhDodMYDPusJsfKSJJqy5R/view?usp=drive_link">
                        Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p>2025, ศราวุธ คำขาด</p>
                <a href="#top">
                  <img
                    src="/img/imgduck.png"
                    className="w-[50px] h-[50px] m-3"
                    alt="Duck image"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
