"use client"
import React from 'react'
import { useState, useEffect } from "react";

const Navbar = () => {
const [count, setCount] = useState(0)
  return (
    <div>
      I am a component {count}
      <div className="button">
      </div>
      <button onClick={() => { setCount(count+1)}}>CLICK</button>
    </div>
  )
}

export default Navbar
