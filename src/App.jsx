import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  const saveLS = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  useEffect(() => {
    let todoString = localStorage.getItem('todos');
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem('todos'));
      setTodos(todos);
    }
  }, [])


  const handleEdit = (e, id) => {
    let todo = todos.filter(todo => {
      return todo.id === id;
    })
    setTodo(todo[0].todo);
    let newTodos = todos.filter(todo => {
      return todo.id !== id;
    })
    setTodos(newTodos);
    saveLS();
  }

  const handleDelete = (e, id) => {
    console.log(id);
    let newTodos = todos.filter(todo => {
      return todo.id !== id;
    })
    setTodos(newTodos);
    saveLS();
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
    saveLS();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const toggleShowFinished = () => {
    setShowFinished(!showFinished);
  }

  const handleCheck = (e) => {
    let id = e.target.name;
    console.log(`the id is${id}`);
    let index = todos.findIndex(todo => {
      return todo.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveLS();
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 bg-violet-200 rounded-xl p-5 min-h-[60vh] sm:w-[75%] xl:w-1/2 shadow-glitter'>
        <h1 className='font-extrabold text-3xl text-center bg-custom-gradient text-transparent bg-clip-text'>FocusFlow - "Embark on Your Productivity Journey"</h1>
        <div className="addTodo my-4 flex flex-col gap-4">
          <h2 className='text-fuchsia-900 font-bold'>Add a Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className='w-full p-2 rounded-lg font-mono text-purple-800 font-medium' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 disabled hover:font-bold text-white px-3 py-1 mx-2 rounded-lg'>Add</button>

          </div>
        </div>
        <input className='mb-5' type="checkbox" onChange={toggleShowFinished} checked={showFinished} name="" id="show" />
        <label className='mx-2' htmlFor="show">Show Finished Todos</label>
        <div className='h-[1px] bg-violet-500 w-[90%] mx-auto'></div>
        <h1 className='text-lg font-bold text-indigo-600 mt-2'>Your Todos</h1>
        <div className="todos">
          {todos.length === 0 ? <div className='p-6'>No Todos to display !!</div> : null}
          {todos.map(item => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex justify-between w-full my-3">
                <div className='flex gap-4 items-center w-full'>
                  <input
                    type="checkbox"
                    onChange={handleCheck}
                    value={item.isCompleted}
                    name={item.id}
                    id=""
                  />
                  <div className={`flex-grow ${item.isCompleted ? "line-through" : ""}`}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex gap-3 items-center">
                  <button
                    onClick={(e) => { handleEdit(e, item.id) }}
                    className='bg-green-400 hover:font-bold text-white px-3 py-1 rounded-md'
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => { handleDelete(e, item.id) }}
                    className='bg-red-500 hover:font-bold text-white px-3 py-1 rounded-md'
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>


      </div>
      <Footer />
    </>
  )
}

export default App
