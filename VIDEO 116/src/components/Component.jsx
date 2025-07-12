import { useContext  } from "react"
import { counterContext } from "../context/content"

const Component = () => {
    const value = useContext(counterContext)
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component
