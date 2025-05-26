import me from "./assets/me.jpg";
import github from "./assets/github.svg";
import linkedIn from "./assets/linkedin.svg";
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
        <h1 aria-label={name} id="hi">
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
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>
        <h3>content</h3>

        <div id="projects" className="flexCol">
          <h2>Projects</h2>

          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
        </div>

        <div id="experience" className="flexCol">
          <h2>Experience</h2>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
          <h3>content</h3>
        </div>
      </main>
    </Background>
  );
}

export default App;
