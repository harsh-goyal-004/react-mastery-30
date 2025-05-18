import { useContext } from "react";
import NotesContext from "../context/NotesContext";
import { AnimatePresence, motion } from "framer-motion";

const NoteItem = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <>
      <AnimatePresence>
        <div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            layout
            className={` ${note.color} w-60 m-5 rounded-lg h-64  px-4 py-4 relative
          `}
          >
            <p className="font-medium tracking-wide">{note.text}</p>
            <span className=" absolute rounded-full pb-1 text-[13px] left-4 font-medium bottom-2">
              {note.date.toString()}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_NOTE", payload: note.id })
              }
            >
              <img
                src="/delete.svg"
                alt="Delete Note"
                className="w-8 absolute rounded-full p-1 bg-black border-none right-3 bottom-2"
              />
            </button>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default NoteItem;
