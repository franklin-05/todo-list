function TodoForm({ onAddTodo }) {

  function handleAddTodo(event) {
    event.preventDefault();
    
    const title = event.target.title.value;
    
    onAddTodo(title);

    event.target.title.value = "";
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todo-input">Todo:</label>
        <input 
          type="text"
          name="title" 
          id="todo-input"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;