import { useState } from "react"

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("")

  function handleSubmit(e) {
  e.preventDefault()

  if (!task.trim()) return

  addTodo(task)

  setTask("")
}
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
      >
        Create Task
      </button>
    </form>
  )
}

export default TodoForm