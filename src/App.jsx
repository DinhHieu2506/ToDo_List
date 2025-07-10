import { useState } from 'react'
import './App.css'
import AddTodoForm from './components/AddTodoForm'
import FilterButtons from './components/FilterButtons'
import TodoList from './features/todos/TodoList'
import TaskStats from './components/TaskStats'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div className="max-w-2xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My To-Do List</h1>
      </header>
   
      <AddTodoForm/>
      <TaskStats/>
      <FilterButtons/>
      <TodoList/>
      
      
    </div>
      </div>
  )
}

export default App
