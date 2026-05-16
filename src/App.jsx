import { useState } from "react"
import Navbar from "./Component/Navbar"
import TodoForm from "./Component/TodoForm"
import TodoList from "./Component/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(task) {
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    }

    setTodos([...todos, newTodo])
  }

  function deleteTodo(id) {
    const filteredTodos = todos.filter(
      (todo) => todo.id !== id
    )

    setTodos(filteredTodos)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <Navbar />

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App