import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Create an array of 30 million objects, only one is "magical"
const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0) // State for button count
  const [numbers, setNumbers] = useState(nums) // State for numbers array

  // Memoize the search for the magical number
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])
  return (
    <>
      <div>
        {/* Display the magical number's index */}
        <span>Magical number is: {magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Button to increment count and update numbers array at count 10 */}
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count == 10){
            setNumbers(new Array(10_000_000).fill(0).map((_,i)=>{
              return {
                index: i,
                isMagical: i === 9_000_000
              }
            }))
          }
        }}>
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
  )
}

export default App
