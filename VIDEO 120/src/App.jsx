import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, decrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <>
     <Navbar/>
     <div>
      <button onClick={() =>dispatch(decrement())}> - </button>
      <button onClick={() =>dispatch(increment())}> + </button>
      Current count is {count}
      <button onClick={() =>dispatch(decrementByAmount())}> +(2) </button>
      <button onClick={() =>dispatch(multiply())}> * </button>
     </div>
    </>
  )
}

export default App
