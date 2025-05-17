import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos([...todos, { id: new Date(), text: todo, complete: false }]);
    console.log(todos);
  }

  function handleDeleteTodo(id) {
    let newTodos = todos.filter((todo) => todo.id != id);

    setTodos(newTodos);
  }

  function handleCompletedTodo(id) {
    let newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );

    setTodos(newTodos);
  }

  return (
    <>
      <div>
        <h1 className="text-2xl text-center mt-4 pb-10 font-medium tracking-wide">
          TODO LIST
        </h1>
        <TodoInput handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompletedTodo={handleCompletedTodo}
        />
      </div>
    </>
  );
}

export default App;
