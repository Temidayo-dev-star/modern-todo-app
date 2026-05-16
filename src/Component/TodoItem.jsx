function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
      <p className="text-lg">
        {todo.text}
      </p>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem