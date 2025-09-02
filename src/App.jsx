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

  const ActiveView = views[view]

  return (
  <div>
    <div>
      <section>
        <ul className="flex justify-center p-3 gap-3">
          <li>
            <button onClick={() => setView("user")}
              className="btn cursor-pointer"
              >
              Profile
            </button>
          </li>
          <li>
            <button onClick={() => setView("aboutme")}
              className="btn cursor-pointer">
              About Me
            </button>
          </li>
          <li>
            <button onClick={() => setView("skill")}
              className="btn cursor-pointer">
              Skil & Expreian
            </button>
          </li>
          <li>
            <button onClick={() => setView("myproject")}
              className="btn cursor-pointer">
              My Project
            </button>
          </li>
          <li>
            <button onClick={() => setView("contact")}
              className="btn cursor-pointer">
              Contact
            </button>
          </li>
        </ul>
      </section>
      <section className="flex justify-center">
        <ActiveView/>
      </section>
    </div>
  </div>
  );
};

export default App;
