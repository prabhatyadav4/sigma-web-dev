import React, { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // State to control button visibility
  const [showbtn, setshowbtn] = useState(1);

  // State for todo items
  const [todos] = useState([
    {
      title: "Title 1",
      desc: "Description 1",
    },
    {
      title: "Title 2",
      desc: "Description 2",
    },
    {
      title: "Title 3",
      desc: "Description 3",
    },
    {
      title: "Title 4",
      desc: "Description 4",
    },
  ]);
  // Example Todo component (commented out)
  // const Todo = ({todo}) => {
  //   return <>
  //   <div className = "border m-4 border-1">
  //   <div className="todo">{todo.title}</div>
  //   <div className="todo">{todo.desc}</div>
  //   </div>
  //   </>
  // }

  return (
    <>
      {/* Logo section */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* Conditionally render button */}
      {showbtn && <button>Show Btn</button>}
      {/* Render todo items */}
      {todos.map((todo) => {
        return (
          <React.Fragment key={todo.title}>
            <div className="border m-4 border-1">
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          </React.Fragment>
        );
      })}
      <div className="card">
        {/* Toggle button for showbtn */}
        <button onClick={() => setshowbtn(!showbtn)}>Toggle Showbtn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* Footer */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
