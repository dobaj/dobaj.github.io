import me from "./assets/me.jpg";
import "./App.css";
import { Background } from "./components/Background";

function App() {
  const name = "Hi! I'm Matt";
  

  return (
    <>
      {/* <Background> */}
      <Background>
      <h1>
        {Array.from(name).map((letter, index) => {
          let rotation = 9;

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
    </Background>
    </>
  );
}

export default App;
