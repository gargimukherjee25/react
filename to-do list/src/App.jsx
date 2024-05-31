import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))

    //prev.map(eachval) => {
    //if(eachval.id === id){todo}
    //else {prevtodo}
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    //filter is used to filter the components
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updatedTodo }}>
      <div className="bg-[#172842] min-h-screen py-8 bg-cover"
       style={{
        backgroundImage: `url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
      >
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-black">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">What's your plans for today?!</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
