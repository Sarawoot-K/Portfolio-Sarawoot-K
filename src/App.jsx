import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import MyProject from "./components/MyProject";
import Contact from "./components/Contact";

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
    <div>
      <div className="flex flex-col items-center ">
        <section className="relative w-150 h-30 flex justify-center items-center">
          <ul className="flex justify-center p-3 gap-3 w-200">
            <li>
              <button
                onClick={() => setView("user")}
                className="btn cursor-pointer"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("aboutme")}
                className="btn cursor-pointer"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("skill")}
                className="btn cursor-pointer"
              >
                Skil & Expreian
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("myproject")}
                className="btn cursor-pointer"
              >
                My Project
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("contact")}
                className="btn cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </section>
        <section className="flex justify-center">
          <div className="flex justify-center p-6 text-center min-h-250 max-w-900">
            <ActiveView />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
