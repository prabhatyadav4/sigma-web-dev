import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
import {v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"

function App() {
const [todo, setTodo] = useState("") // current input
const [todos, setTodos] = useState([]) // all todos
const [showFinished, setShowFinished] = useState(true) // show completed toggle

useEffect(() => {
  let todoString = localStorage.getItem("todos") // get from LS
  if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }
}, [])

const saveToLS = () => {
  localStorage.setItem("todos", JSON.stringify(todos)) // save to LS
}

const toggleFinished = () => {
  setShowFinished(!showFinished) // toggle show
}

const handleEdit = (id)=> {
  let t = todos.filter(i=>i.id === id) // find todo
  setTodo(t[0].todo)
  let newTodos = todos.filter(item => {
    return item.id!==id
  })
  setTodos(newTodos)
  saveToLS()
}

const handleDelete = (id)=> {
  let newTodos = todos.filter(item => {
    return item.id!==id
  })
  setTodos(newTodos)
  saveToLS()
}

const handleAdd = ()=> {
  setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}]) // add todo
  setTodo("")
  saveToLS()
}

const handleChange = (e)=> {
  setTodo(e.target.value) // update input
}

const handleCheckbox = (e) => {
  let id = e.target.name
  let index = todos.findIndex(item =>{
    return item.id === id;
  })
  let newTodos = [...todos]
  newTodos[index].isCompleted = !newTodos[index].isCompleted // toggle complete
  setTodos(newTodos)
  saveToLS()
}

  return (
    <>
    <Navbar/>
     <div className="md:container mx-3 md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
     <h1 className="font-bold text-center text-3xl">iTask - Manage your task at one place</h1>
      <div className="addTodo my-5 flex flex-col gap-4">
      <h2 className='text-lg font-bold'>Add a Todo</h2>
      <div className="flex gap-2">
      <input onChange={handleChange} value = {todo} type='text' className=' textArea w-full rounded-full px-5 py-1'/>
      <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 hover:bg-violet-950 p-4 px-5 py-2 text-sm font-bold text-white rounded-full cursor-pointer disabled:bg-violet-700'>Save</button>
      </div>
      </div>
      <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
      <label htmlFor="show" className="mx-2">Show Finished</label>
      <div className="bg-black h-[1px] opacity-15 w-[3/4] mx-auto my-2"></div>
      <div className="text-lg font-bold"> Your Todos</div>
      <div className="todos">
        {todos.length === 0 && <div className='m-5'>No Todos to display </div>}
        {todos.map(item =>{

          return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 justify-between my-3">
            <div className="flex gap-6">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
          <div className="buttons flex h-full">
            <button onClick={()=>handleEdit(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text -sm font-bold text-white rounded-md mx-1'><FaEdit/></button>
            <button onClick={()=>handleDelete(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text -sm font-bold text-white rounded-md mx-1'><AiFillDelete/></button>
          </div>
        </div>
        })}
      </div>
     </div>
    </>
  )
}

export default App
