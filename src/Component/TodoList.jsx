import TodoItem from "./TodoItem"

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList