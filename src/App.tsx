import me from "./assets/me.jpg";
import "./App.css";
import { Background } from "./components/Background";
import { useEffect } from "react";

function App() {
  const name = "Hi! I'm Matt";

  const scrollBoxes = ["homeBox", "projectsBox", "experienceBox"];

  const noProgress = "#bbbbbba0";
  const Progress = "#ffffffff";
  const progressLength = 5;

  const interpolateHex = (colour1: string, colour2: string, p: number) => {
    const r1 = parseInt(colour1.substring(1, 3), 16);
    const g1 = parseInt(colour1.substring(3, 5), 16);
    const b1 = parseInt(colour1.substring(5, 7), 16);
    const o1 = parseInt(
      colour1.length == 9 ? colour1.substring(7, 9) : "ff",
      16
    );

    const r2 = parseInt(colour2.substring(1, 3), 16);
    const g2 = parseInt(colour2.substring(3, 5), 16);
    const b2 = parseInt(colour2.substring(5, 7), 16);
    const o2 = parseInt(
      colour2.length == 9 ? colour2.substring(7, 9) : "ff",
      16
    );

    const r = Math.round(r1 * (1 - p) + r2 * p);
    const g = Math.round(g1 * (1 - p) + g2 * p);
    const b = Math.round(b1 * (1 - p) + b2 * p);
    const o = Math.round(o1 * (1 - p) + o2 * p);

    return (
      "#" + r.toString(16) + g.toString(16) + b.toString(16) + o.toString(16)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeights = scrollBoxes.map((id) => {
        const yPos =
          document.getElementById(id)?.getBoundingClientRect().top ?? 0;
        return yPos + window.scrollY;
      });

      for (let i = 1; i < progressLength; i++) {
        const progressDiv = document.getElementById("progress" + i.toString());
        if (progressDiv) {
          // progressDiv.style.display = "grid"
          const children =
            progressDiv.children as HTMLCollectionOf<HTMLDivElement>;
          for (const child of children) {
            child.style.backgroundColor = noProgress;
          }
        }
      }

      let i = 0;
      while (scrollHeights[i] < window.scrollY) {
        if (i !== 0) {
          const progressDiv = document.getElementById(
            "progress" + i.toString()
          );
          if (progressDiv) {
            const children =
              progressDiv.children as HTMLCollectionOf<HTMLDivElement>;
            for (const child of children) {
              child.style.backgroundColor = Progress;
            }
          }
        }

        i += 1;
      }
      if (i !== 0) {
        const initial = scrollHeights[i - 1];
        const final = scrollHeights[i] - initial;
        const progress = window.scrollY - initial;
        const percentage = progress / final;

        const subPercentages = 1.0 / progressLength;
        const progressDiv = document.getElementById("progress" + i.toString());
        if (progressDiv) {
          // progressDiv.style.display = "grid"
          const children =
            progressDiv.children as HTMLCollectionOf<HTMLDivElement>;

          let j = 0;
          while (percentage > subPercentages * j && j < progressLength) {
            children[j].style.backgroundColor = Progress;
            j += 1;
          }
          if (j < progressLength) {
            const littlePercentage =
              (percentage - subPercentages * (j - 1)) / subPercentages;

            children[j].style.backgroundColor = interpolateHex(
              noProgress,
              Progress,
              littlePercentage
            );
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <a href="#root">Home</a>
          </li>
          <div id="progress1" className="progress">
            {Array.from({ length: progressLength }).map((_, index) => (
              <div className="dot" aria-hidden="true" key={index} />
            ))}
          </div>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <div id="progress2" className="progress">
            {Array.from({ length: progressLength }).map((_, index) => (
              <div className="dot" aria-hidden="true" key={index} />
            ))}
          </div>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </nav>

      <main>
        <div id="homeBox">
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
          <img src={me}></img>
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

        <div id="projectsBox">
          <h2 id="projects">Projects</h2>

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
        <div id="experienceBox">
          <h2 id="experience">Experience</h2>
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
