import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import MyProject from "./components/MyProject";
import Contact from "./components/Contact";
import { Button, buttonVariants } from "./components/ui/button";

const App = () => {
  const [view, setView] = useState("user");

  const views = {
    user: UserProfile,
    aboutme: AboutMe,
    skill: Skill,
    myproject: MyProject,
    contact: Contact,
  };

  const ActiveView = views[view];

  return (
    <div className="">
      <div className="">
        <section className="">
          <ul className="flex justify-center p-6 gap-3 flex-wrap max-w-480">
            <li>
              <div onClick={() => setView("user")}>
                <Button
                  variant="outline"
                  className="btn cursor-pointer bg-red-900 text-white"
                >
                  Profile
                </Button>
              </div>
            </li>
            <li>
              <div onClick={() => setView("aboutme")}>
                <Button
                  variant="outline"
                  className="btn cursor-pointer  bg-red-900 text-white"
                >
                  About Me
                </Button>
              </div>
            </li>
            <li>
              <div onClick={() => setView("skill")}>
                <Button
                  variant="outline"
                  className="btn cursor-pointer  bg-red-900 text-white"
                >
                  {" "}
                  Skil & Expreian{" "}
                </Button>
              </div>
            </li>
            <li>
              <div onClick={() => setView("myproject")}>
                <Button
                  variant="outline"
                  className="btn cursor-pointer  bg-red-900 text-white"
                >
                  My Project
                </Button>
              </div>
            </li>
            <li>
              <div onClick={() => setView("contact")}>
                <Button
                  variant="outline"
                  className="btn cursor-pointer bg-red-900 text-white"
                >
                  Contact
                </Button>
              </div>
            </li>
          </ul>
        </section>
        <section className=" max-w-480 flex justify-center">
            <ActiveView />
        </section>
      </div>
    </div>
  );
};

export default App;
