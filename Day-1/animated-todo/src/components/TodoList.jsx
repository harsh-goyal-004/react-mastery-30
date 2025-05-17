import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function TodoList({ todos, handleDeleteTodo, handleCompletedTodo }) {
  return (
    <>
      <div className="mt-5 w-full flex flex-col justify-center items-center gap-6">
        <AnimatePresence>
          {todos.map((todo, index) => (
            <ul key={todo.id} className="flex text-center gap-5">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                layout
                className="flex w-[80vw]  justify-between bg-purple-400 px-6 py-1 items-center rounded-lg text-white font-medium "
              >
                <motion.li
                  initial={{ textDecoration: "none", color: "#fff" }}
                  animate={
                    todo.complete
                      ? {
                          textDecoration: "line-through",
                          color: "lightgray",
                        }
                      : undefined
                  }
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  layout
                >
                  {todo.text}
                </motion.li>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="border px-2 py-1 bg-white text-purple-400 rounded-lg "
                  >
                    Delete
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCompletedTodo(todo.id)}
                    className="border px-2 py-1 bg-white text-purple-400 rounded-lg "
                  >
                    Complete
                  </motion.button>
                </div>
              </motion.div>
            </ul>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default TodoList;
