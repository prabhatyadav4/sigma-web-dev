import Component from "./Component"
import { useContext  } from "react"
import { counterContext } from "../context/content"

const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
        <button onClick={() => value.setCount((count) => count + 1)}><span><Component/></span>Button</button>
    </div>
  )
}

export default Button
