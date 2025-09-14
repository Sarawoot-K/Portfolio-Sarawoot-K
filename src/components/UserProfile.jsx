import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "./ui/card";
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
            src="../img/img29061.jpg"
            className="w-60 h-80 rounded-3xl"
            alt="profile"
          ></img>
        </div>
        <p className="text-center text-2xl p-6">
          Full Stack Developer <br />
          Science Tutor, Recreationist and Master of Ceremonies
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div>
            <Button variant="outline" className="btn cursor">
              <a href="https://www.linkedin.com/in/sarawoot-khumkhat/">
                link-in
              </a>
            </Button>
          </div>
          <div>
            <Button variant="outline" className="btn cursor">
              <a href="https://line.me/ti/p/KHUJwV-TTw">line</a>
            </Button>
          </div>
          <div>
            <Button variant="outline" className="btn cursor">
              <a href="https://www.facebook.com/share/17PzJLtxoK/?mibextid=wwXIfr">
                Facebook
              </a>
            </Button>
          </div>
          <div>
            <Button variant="outline" className="btn cursor">
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
          {/* <div className="flex flex-row ">
            <img
              src="./src/img/image-eGdwt0ghqfF9avmbJhC9x9b8zUdJWV.png"
              className="w-[50px] h-[50px]"
            />
            <img
              src="./src/img/image-eGdwt0ghqfF9avmbJhC9x9b8zUdJWV.png"
              className="w-[50px] h-[50px]"
            />
            <img
              src="./src/img/image-eGdwt0ghqfF9avmbJhC9x9b8zUdJWV.png"
              className="w-[50px] h-[50px]"
            />
          </div> */}
          "รักการเรียนรู้สิ่งใหม่ๆ จนกลายเป็นเป็ด และเป็ดที่ดีคือเป็ด
          Pro(festional)"
        </div>
      </div>
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
      <div className=" flex m-6 gap-3">
        <div className="">
          <Card>
            <CardContent>
              <p className="">
                ผมเป็นโปรแกรมเมอร์มือใหม่ไฟแรงที่พร้อมลุยงาน
                และพร้อมเรียนรู้เพื่อพัฒนาตนเองไปพร้อมๆกับองค์กร
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
              <p className="">แพร่,ประเทศไทย</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle>
                <p>เป้าหมายชีวิต</p>
              </CardTitle>
              <p className="">
                "เรียนรู้และพัฒนาเพื่อชีวิตที่ดีขึ้น
                แล้วถ่ายทอดประสบกาณ์ให้คนที่ต้องการ"
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
                <p>Generation Thailand</p>
              </AccordionTrigger>
              <AccordionContent>
                <p>Internship at Generation thailand in 2025</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p>D Tutor</p>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Freelance Tutor | 2018-present
                  <br />
                  online section & onsite section
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p>Coming Soon ...</p>
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
                      <li className="text-xl">css</li>
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
                      <li className="text-xl">Github</li>
                    </CardContent>
                  </Card>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className=" m-6 flex">
        <Card>
          <div className=" flex gap-3">
            <div className="w-4/9 flex flex-col gap-3">
              <div className="rounded-2xl p-3">
                <p>ส่งอีเมลล์ : </p> Sarawoot.Kk27@gmail.com
              </div>
              <div className="rounded-2xl p-3">
                ผมเป็นโปรแกรมเมอร์มือใหม่ไฟแรงที่พร้อมลุยงาน
                และพร้อมเรียนรู้เพื่อพัฒนาตนเองไปพร้อมๆกับองค์กร
              </div>
            </div>
            <div className="p-3">
              <div className="h-3/4 flex items-center">
                <div className="flex flex-wrap justify-center gap-2">
                  <div>
                    <Button variant="outline" className="btn cursor">
                      <a href="https://www.linkedin.com/in/sarawoot-khumkhat/">
                        link-in
                      </a>
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" className="btn cursor">
                      <a href="https://line.me/ti/p/KHUJwV-TTw">line</a>
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" className="btn cursor">
                      <a href="https://www.facebook.com/share/17PzJLtxoK/?mibextid=wwXIfr">
                        Facebook
                      </a>
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" className="btn cursor">
                      <a href="https://drive.google.com/file/d/1sspiO3JO-TBhDodMYDPusJsfKSJJqy5R/view?usp=drive_link">
                        Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p>2025, ศราวุธ คำขาด</p>
                <img
                  src="../img/img29061.jpg"
                  className="w-[50px] h-[50px] m-3"
                  alt="Duck image"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
