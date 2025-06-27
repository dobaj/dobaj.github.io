import me from "./assets/me.jpg";

import github from "./assets/github.svg";
import linkedIn from "./assets/linkedin.svg";

// Companies(ish) Logos
import queensCAC from "./assets/projects/logos/queensCAC.png";
import freelance from "./assets/projects/logos/construction.svg";

// Project Photos
import khsc1 from "./assets/projects/khsc1.jpg";
import khsc2 from "./assets/projects/khsc2.jpg";
import kif1 from "./assets/projects/kif1.jpg";
import kif2 from "./assets/projects/kif2.jpg";
import kvpr1 from "./assets/projects/kvpr1.jpg";
import kvpr2 from "./assets/projects/kvpr2.jpg";
import bts1 from "./assets/projects/bts1.jpg";
import bts2 from "./assets/projects/bts2.jpg";

// Technologies Photos
import reactIcon from "./assets/technologies/react.svg";
import expressIcon from "./assets/technologies/express.svg";
import mongoIcon from "./assets/technologies/mongodb.svg";
import djangoIcon from "./assets/technologies/django.svg";
import wordpressIcon from "./assets/technologies/wordpress.svg";
import cpp from "./assets/technologies/c++.svg";
import opengl from "./assets/technologies/opengl.svg";

import "./App.css";
import { Background } from "./components/Background";
import { useEffect, useState } from "react";
import { createHandleScroll, scrollToId } from "./components/ScrollEffects";
import { Project } from "./components/Project";

function App() {
  const name = "Hi! I'm Matt";

  const NoProgress = "#bbbbbba0";
  const Progress = "#ffffffff";
  const progressLength = 5;

  const [showCAC, setShowCAC] = useState<boolean>(false);
  const [showFreelance, setShowFreelance] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = createHandleScroll(
      ["root", "projects", "experience"],
      progressLength,
      NoProgress,
      Progress
    );

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Background>
      <div className="actualRoot">
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a onClick={() => scrollToId("root")}>Home</a>
            </li>
            <div id="progress1" className="progress">
              {Array.from({ length: progressLength }).map((_, index) => (
                <div className="dot" aria-hidden="true" key={index} />
              ))}
            </div>
            <li>
              <a onClick={() => scrollToId("projects")}>Projects</a>
            </li>
            <div id="progress2" className="progress">
              {Array.from({ length: progressLength }).map((_, index) => (
                <div className="dot" aria-hidden="true" key={index} />
              ))}
            </div>
            <li>
              <a onClick={() => scrollToId("experience")}>Experience</a>
            </li>
          </ul>
        </nav>

        <main>
          <h1 aria-label={name}>
            <span aria-hidden="true">
              {Array.from(name).map((letter, index) => {
                let rotation = 6;

                if (index % 2 == 0) {
                  rotation *= -1;
                }

                return (
                  <span
                    key={index}
                    style={{
                      display: "inline-block",
                      transform: `rotate(${rotation}deg)`,
                      WebkitTransform: `rotate(${rotation}deg)`,
                      marginRight: "2px",
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </h1>

          <h3>Welcome to my page!</h3>
          <div className="socialRow">
            <a
              href="https://github.com/dobaj"
              target="_blank"
              className="socialLink"
            >
              <img className="socialIcon" src={github} />
              <img className="socialIcon blur" src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/mattdobaj/"
              className="socialLink"
              target="_blank"
            >
              <img className="socialIcon" src={linkedIn} />
              <img className="socialIcon blur" src={linkedIn} />
            </a>
          </div>

          <img className="profilePhoto" src={me}></img>

          <p>I'm a full-stack developer. blah blah blah other stuff</p>

          <div id="projects" className="flexCol">
            <h1>Projects</h1>

            <div id="CAC Projects" className="flexCol">
              <a
                className="projectHeader"
                onClick={() => {
                  setShowCAC((prev) => !prev);
                }}
              >
                <img src={queensCAC} />
                <hr />

                <h2>Queen's Centre for Advanced Computing</h2>
              </a>

              <div
                className={showCAC ? "hide reveal" : "hide"}
                style={{ "--reveal-time": "0.5s" } as React.CSSProperties}
              >
                <Project
                  title="ArcheOptix"
                  photos={[]}
                  technologies={[
                    [cpp, "C++ logo"],
                    [opengl, "OpenGL logo"],
                  ]}
                  description={
                    <p>
                      I extended a NanoGUI-based frontend for a medical
                      brain-bleed scanning device. To allow for reliable support
                      across multiple development environments, I created a
                      CMake build process. The software guides users through the
                      head scanning process and points out potential real-time
                      scanning issues. I used a custom OpenGL-based renderer to
                      visualize the head scanning process and externally
                      detected brain-bleeds on a 3D head model complete with
                      animations to show errors. To separate hardware
                      communication from the frontend and improve stability and
                      responsiveness, I implemented multithreading as well. I
                      worked closely with the client and guided them through set
                      up, live demos, and explored potential project extensions
                      with them.
                    </p>
                  }
                />

                <Project
                  title="Queen's Vice-Principal Research Dashboard"
                  photos={[
                    [
                      khsc1,
                      "Screenshot showing KHSC, a public site using the same codebase as VPR.",
                    ],
                    [
                      khsc2,
                      "Screenshot showing KHSC's Report Preview feature.",
                    ],
                  ]}
                  technologies={[
                    [reactIcon, "React icon"],
                    [expressIcon, "Express icon"],
                    [mongoIcon, "MongoDB icon"],
                  ]}
                  description={
                    <p>
                      I developed new features for an internal Queen's
                      Vice-Principal Research (VPR) dashboard to track various
                      HR and funding metrics. For integration with Queen's
                      services, I implemented{" "}
                      <em>Microsoft Single Sign On (SSO)</em>. I also reworked
                      automatic report generation, which displays relevant
                      filtered data in a stylized PDF format. To modernize the
                      project, I updated the build process from Create React App
                      to Webpack and added various security headers such as a
                      Content Security Policy (CSP). I also created common
                      filtering elements to be used across a variety of data
                      sets/types. Screenshots are from KHSC, a public site that
                      shares the same codebase.
                    </p>
                  }
                />

                <Project
                  title={["Kingston In Focus", "https://kingstoninfocus.ca/"]}
                  photos={[
                    [
                      kif1,
                      "Screenshot showing the Kingston in Focus Dashboard's Local Economy page.",
                    ],
                    [
                      kif2,
                      "Screenshot showing the Kingston in Focus Dashboard's Employment and Education page.",
                    ],
                  ]}
                  technologies={[
                    [reactIcon, "React icon"],
                    [djangoIcon, "Django icon"],
                  ]}
                  description={
                    <p>
                      I added a variety of new data visualization charts to the
                      site using data from the City of Kingston, Statistics
                      Canada, and the Government of Ontario. To facilitate data
                      visualization for very large datasets, I modified how
                      Statistics Canada data is obtained by filtering before
                      data collection. To modernize the project, I updated the
                      build process from Create React App to Webpack. I
                      refactored the codebase to use common filtering elements
                      to reduce duplicated code.
                    </p>
                  }
                />

                <Project
                  title={[
                    "Queen's Vice Principal Research Funding Dashboard",
                    "https://www.queensu.ca/vpr/funding/search/",
                  ]}
                  photos={[
                    [kvpr1, "Screenshot showing the VPR Funding Dashboard."],
                    [
                      kvpr2,
                      "Screenshot showing information for a funding opportunity.",
                    ],
                  ]}
                  technologies={[[wordpressIcon, "Wordpress icon"]]}
                  description={
                    <p>
                      I maintained the site by providing support, fixing bugs, and adding new filtering features. To improve quality of life, I added date-validity checking and improved printing functionality on the site's admin panel.
                    </p>
                  }
                />
              </div>
            </div>

            <div id="Freelance" className="flexCol">
              <div className="projectHeader">
                <img src={freelance} />
                <hr />
                <a
                  onClick={() => {
                    setShowFreelance((prev) => !prev);
                  }}
                >
                  <h2>Freelance</h2>
                </a>
              </div>

              <div className={showFreelance ? "hide reveal" : "hide"}>
                <Project
                  title={[
                    "Butler Tree Service",
                    "https://www.butlertreeserviceltd.com/",
                  ]}
                  photos={[
                    [
                      bts1,
                      "Screenshot showing the Butler Tree Service home page.",
                    ],
                    [
                      bts2,
                      "Screenshot showing the Butler Tree Service services page.",
                    ],
                  ]}
                  technologies={[[wordpressIcon, "Wordpress icon"]]}
                  description={
                    <p>
                      Created a custom WordPress site for a client featuring a
                      small gallery of their work, a page describing their
                      services, and a contact form for booking services.
                    </p>
                  }
                />
              </div>
            </div>
          </div>

          <div id="experience" className="flexCol">
            <h1>Experience</h1>
          </div>
        </main>
        <div className="dummy" />
      </div>
    </Background>
  );
}

export default App;
