import { useState } from 'react'
import './App.css'

function App() {
  // State for form fields: email and phone
  const [form, setForm] = useState({email: "", phone: ""})

  // Handle button click event
  const handleClick = () => {
    alert("Hey, I am clicked.")
  }

  // Handle mouse over event on red div
  const handleMouseOver = () => {
    alert("Hey I am red div.")
  }

  // Handle input changes for form fields
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }

  return (
    <>
      {/* Button with click handler */}
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* Red div with mouse over handler */}
      <div className="red" onMouseOver={handleMouseOver}>
        I am a div
      </div>
      
      {/* Input for email */}
      <input
        type="text"
        className="text"
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      {/* Input for phone */}
      <input
        type="text"
        className="text"
        name='phone'
        value={form.phone}
        onChange={handleChange}
      />
    </>
  )
}

export default App
