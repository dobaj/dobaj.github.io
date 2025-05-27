import me from "./assets/me.jpg";
import github from "./assets/github.svg";
import linkedIn from "./assets/linkedin.svg";
import queensCAC from "./assets/queensCAC.png";
import khsc1 from "./assets/khsc1.jpg";
import khsc2 from "./assets/khsc2.jpg";
import reactIcon from "./assets/react.svg";
import expressIcon from "./assets/express.svg";
import mongoIcon from "./assets/mongodb.svg";

import "./App.css";
import { Background } from "./components/Background";
import { useEffect } from "react";
import { createHandleScroll, scrollToId } from "./components/ScrollEffects";

function App() {
  const name = "Hi! I'm Matt";

  const NoProgress = "#bbbbbba0";
  const Progress = "#ffffffff";
  const progressLength = 5;

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

          <div id="projects" className="flexCol">
            <h1>Projects</h1>

            <div className="projectHeader">
              <img src={queensCAC} />
              <hr />
              <h2>Queen's Centre for Advanced Computing</h2>
            </div>

            <div className="project">
              <h2>Queen's Vice-Principal Research Dashboard</h2>
              <div className="indent">
                <div className="photos">
                  <img src={khsc1} />
                  <img src={khsc2} />
                </div>
                <h3>Description</h3>
                <p>
                  Developed new features for an internal Queen's Vice-Principal
                  Research (VPR) dashboard to track various HR and funding
                  metrics. Implemented <em>Microsoft Single Sign On (SSO)</em>{" "}
                  login for integration with Queen's services. Reworked
                  automatic report generation, which displays relevant filtered
                  data in a stylized PDF format. Updated the project from Create
                  React App to Webpack and added various security headers such
                  as a Content Security Policy (CSP). Created common filtering
                  elements to be used across a variety of data sets/types.
                  Screenshots are from KHSC, a public site that shares the same
                  codebase.
                </p>
                <h3>Technologies</h3>
                <div className="technologies">
                  <img src={reactIcon} />
                  <img src={expressIcon} />
                  <img src={mongoIcon} />
                </div>
              </div>
            </div>

            <div className="project">
              <h2>Kingston Dashboard</h2>
            </div>

            <div className="project">
              <h2>VPR Research Funding Database</h2>
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
