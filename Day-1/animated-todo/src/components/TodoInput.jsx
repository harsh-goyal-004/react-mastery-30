import React, { useState } from "react";
import { motion } from "framer-motion";

function TodoInput({ handleAddTodo }) {
  const [todo, setTodo] = useState("");

  function handleTodoInput() {
    if (todo !== "") {
      handleAddTodo(todo);
      setTodo("");
    }
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <motion.input
            whileFocus={{
              scale: 1.03,
              boxShadow: "0 0 10px #c084fc",
            }}
            type="text"
            name="todo"
            id="todo"
            value={todo}
            placeholder="Type a todo..."
            onChange={(e) => setTodo(e.target.value)}
            className="border-2  px-2 py-2 rounded-lg w-96 hover:border-purple-500  focus:outline-purple-500"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            onClick={() => handleTodoInput()}
            className="ml-4 border-2 px-14 rounded-lg py-2 bg-purple-400 text-white font-bold tracking-wider uppercase border-none "
          >
            Add
          </motion.button>
        </form>
      </div>
    </>
  );
}

export default TodoInput;
