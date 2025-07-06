import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";

function App() {
  // State for count
  const [count, setCount] = useState(0);
  // State for first
  const [first, setFirst] = useState(0);
  // State for color
  const [color, setColor] = useState(0);

  // Runs on every render
  useEffect(() => {
    alert("Hey, I will run on every render.");
  });

  // Runs only on first render (component mount)
  useEffect(() => {
    alert("Hey, welcome to my page.");
  }, []);

  // Runs when 'count' changes
  useEffect(() => {
    alert("Count was changed.");
    setColor(color + 1); // Update color when count changes
  }, [count]);

  // Runs when 'first' changes
  useEffect(() => {
    alert("First was changed.");
  }, [first]);

  return (
    <>
      {/* Navbar with dynamic color */}
      <Navbar color={"navy " + "blue" + color} />
      <div>
        {/* Vite logo link */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* React logo link */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Button to increment count */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
