import { useState } from 'react' // Import the useState hook from React

import './App.css' // Import the CSS file for styling

function App() {
  // Declare a state variable 'count' and a function 'setCount' to update it, initialized to 0
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Display the current value of count */}
     <div>The count is {count}</div>
     {/* Button to update the count when clicked */}
     <button onClick={ () => {setCount(count + 1)}}>Update Count</button>
    </>
  )
}

export default App // Export the App component as default
