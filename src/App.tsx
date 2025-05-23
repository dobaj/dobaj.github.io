import me from "./assets/me.jpg";
import "./App.css";
import { Background } from "./components/Background";

function App() {
  const name = "Hi! I'm Matt";

  // useEffect(() => {
  //   const handleScroll = () => {
  //     
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
      <Background>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#root">Home</a></li>
            <li><span className="dot" aria-hidden="true"/></li>
            <li><span className="dot" aria-hidden="true"/></li>
            <li><span className="dot" aria-hidden="true"/></li>
            <li><a href="#projects">Projects</a></li>
            <li><span className="dot" aria-hidden="true"/></li>
            <li><span className="dot" aria-hidden="true"/></li>
            <li><span className="dot" aria-hidden="true"/></li>
            <li><a href="#experience">Experience</a></li>
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

        <h2 id="experience">Experience</h2>
        
        </main>
      </Background>
  );
}

export default App;
