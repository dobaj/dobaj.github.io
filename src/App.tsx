import me from "./assets/me.jpg";

import github from "./assets/github.svg";
import linkedIn from "./assets/linkedin.svg";

// Companies(ish) Logos
import queensCAC from "./assets/queensCAC.png";
import freelance from "./assets/construction.svg";

// Project Photos
import khsc1 from "./assets/khsc1.jpg";
import khsc2 from "./assets/khsc2.jpg";
import kif1 from "./assets/kif1.jpg";
import kif2 from "./assets/kif2.jpg";
import kvpr1 from "./assets/kvpr1.jpg";
import kvpr2 from "./assets/kvpr2.jpg";

// Technologies Photos
import reactIcon from "./assets/react.svg";
import expressIcon from "./assets/express.svg";
import mongoIcon from "./assets/mongodb.svg";
import djangoIcon from "./assets/django.svg";
import wordpressIcon from "./assets/wordpress.svg";

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
                  technologies={[]}
                  description={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum vulputate erat in placerat. Mauris quis
                      porta sem. Sed et tincidunt orci, sed fermentum sapien.
                      Etiam tincidunt mauris ac nibh pretium, ut dignissim urna
                      bibendum. Mauris euismod rutrum ipsum ut malesuada.
                      Vestibulum quis diam fermentum, sollicitudin mi quis,
                      condimentum ipsum. Ut blandit hendrerit nulla, ac
                      condimentum quam convallis vitae. Proin elementum sem id
                      sem commodo, ut rutrum quam faucibus. Suspendisse leo sem,
                      sodales vel eleifend ut, consequat sit amet nisi.
                      Curabitur sem nibh, rhoncus fringilla risus et, dictum
                      aliquet neque. Nulla tempus lacus vel blandit lobortis.
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
                    [mongoIcon, "Mongo icon"],
                  ]}
                  description={
                    <p>
                      Developed new features for an internal Queen's
                      Vice-Principal Research (VPR) dashboard to track various
                      HR and funding metrics. Implemented{" "}
                      <em>Microsoft Single Sign On (SSO)</em> login for
                      integration with Queen's services. Reworked automatic
                      report generation, which displays relevant filtered data
                      in a stylized PDF format. Updated the project from Create
                      React App to Webpack and added various security headers
                      such as a Content Security Policy (CSP). Created common
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
                    [djangoIcon, "django icon"],
                  ]}
                  description={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum vulputate erat in placerat. Mauris quis
                      porta sem. Sed et tincidunt orci, sed fermentum sapien.
                      Etiam tincidunt mauris ac nibh pretium, ut dignissim urna
                      bibendum. Mauris euismod rutrum ipsum ut malesuada.
                      Vestibulum quis diam fermentum, sollicitudin mi quis,
                      condimentum ipsum. Ut blandit hendrerit nulla, ac
                      condimentum quam convallis vitae. Proin elementum sem id
                      sem commodo, ut rutrum quam faucibus. Suspendisse leo sem,
                      sodales vel eleifend ut, consequat sit amet nisi.
                      Curabitur sem nibh, rhoncus fringilla risus et, dictum
                      aliquet neque. Nulla tempus lacus vel blandit lobortis.
                      Maecenas accumsan cursus urna, ac cursus ipsum maximus
                      eget. Mauris massa mi, commodo eu aliquet pretium, sodales
                      viverra erat.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum vulputate erat in placerat. Mauris quis
                      porta sem. Sed et tincidunt orci, sed fermentum sapien.
                      Etiam tincidunt mauris ac nibh pretium, ut dignissim urna
                      bibendum. Mauris euismod rutrum ipsum ut malesuada.
                      Vestibulum quis diam fermentum, sollicitudin mi quis,
                      condimentum ipsum. Ut blandit hendrerit nulla, ac
                      condimentum quam convallis vitae. Proin elementum sem id
                      sem commodo, ut rutrum quam faucibus. Suspendisse leo sem,
                      sodales vel eleifend ut, consequat sit amet nisi.
                      Curabitur sem nibh, rhoncus fringilla risus et, dictum
                      aliquet neque. Nulla tempus lacus vel blandit lobortis.
                      Maecenas accumsan cursus urna, ac cursus ipsum maximus
                      eget. Mauris massa mi, commodo eu aliquet pretium, sodales
                      viverra erat.
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
                      khsc1,
                      "Screenshot showing KHSC, a public site using the same codebase as VPR.",
                    ],
                    [
                      khsc2,
                      "Screenshot showing KHSC's Report Preview feature.",
                    ],
                  ]}
                  technologies={[[wordpressIcon, "Wordpress icon"]]}
                  description={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum vulputate erat in placerat. Mauris quis
                      porta sem. Sed et tincidunt orci, sed fermentum sapien.
                      Etiam tincidunt mauris ac nibh pretium, ut dignissim urna
                      bibendum. Mauris euismod rutrum ipsum ut malesuada.
                      Vestibulum quis diam fermentum, sollicitudin mi quis,
                      condimentum ipsum. Ut blandit hendrerit nulla, ac
                      condimentum quam convallis vitae. Proin elementum sem id
                      sem commodo, ut rutrum quam faucibus. Suspendisse leo sem,
                      sodales vel eleifend ut, consequat sit amet nisi.
                      Curabitur sem nibh, rhoncus fringilla risus et, dictum
                      aliquet neque. Nulla tempus lacus vel blandit lobortis.
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
