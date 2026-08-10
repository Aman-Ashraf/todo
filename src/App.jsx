import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'

function App() {
  const [todo, setTodo] = useState("")
  
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (index) => {
    let newTodos = [...todos];
    setTodo(newTodos[index].todo);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleCheckbox = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const handleDel = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-100 min-h-[80vh]">
        <div className="addtask">
          <div className="addtask">
            <h1 className=" text-2xl font-bold mx-2 ">Add a Todo</h1>
            <input onChange={handleChange} value={todo} type="text" className="bg-blue-300 rounded-2xl px-2 w-1/2" />
            <button onClick={handleAdd} disabled={todo.length < 3} className="Add bg-blue-500 border-none text-white rounded text-sm p-1 m-2 disabled:bg-blue-800">Add</button>
          </div>

          {todos.map((item, index) => {
            return <div key={index} className="todos flex w-full h-fit">
              <input checked={item.isCompleted} onChange={() => handleCheckbox(index)} type="checkbox" className="h-5 w-5 p-1 m-2 self-center" />
              <div className="mytask">


                <div className="mytodos flex items-center">
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                  <button onClick={() => handleEdit(index)} className="Edit bg-blue-500 border-none text-white rounded text-sm p-1 m-2 cursor-pointer">Edit</button>
                  <button onClick={() => handleDel(index)} className="Del bg-blue-500 border-none text-white rounded text-sm p-1 m-2 cursor-pointer">Delete</button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
