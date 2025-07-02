import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  // State variable to keep track of the counter value
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      {/* Navbar component with logo text prop */}
      <Navbar logoText = "KernalPrab"/>
      {/* Display the current value */}
      <div className="button">{value}</div>
      {/* Button to increment the value */}
      <button onClick={ () => {setValue(value + 1)}}>Click me</button>
      {/* Footer component */}
      <Footer/>
    </div>
  );
}

export default App;
