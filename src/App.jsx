import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import MyProject from "./components/MyProject";
import Contact from "./components/Contact";
import { Button } from "./components/ui/button";

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

  const navItems = [
    { id: "user", label: "Profile" },
    { id: "aboutme", label: "About Me" },
    { id: "skill", label: "Skills & Experience" },
    { id: "myproject", label: "My Project" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="">
      <div className="">
        <section className="">
          <ul className="flex justify-center p-6 gap-3 flex-wrap max-w-480">
            {navItems.map((item) => (
              <li key={item.id}>
                <div>
                  <Button
                    onClick={() => setView(item.id)}
                    variant="outline"
                    className="btn cursor-pointer bg-red-900 text-white"
                  >
                    {item.label}
                  </Button>
                </div>
              </li>
            ))}
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
