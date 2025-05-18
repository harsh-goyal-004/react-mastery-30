import { useReducer, useState } from "react";
import NotesContext from "./context/NotesContext";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import NoteSearch from "./components/NoteSearch";
import { motion } from "framer-motion";

function App() {
  // Random color for notes
  const tailwindColors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-teal-300",
    "bg-cyan-300",
  ];

  const initialState = {
    notes: [],
    searchQuery: "",
  };

  const [notesState, dispatch] = useReducer(reducer, initialState);

  const [openModal, setOpenModal] = useState(false);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_NOTE":
        return {
          ...state,
          notes: [
            ...state.notes,
            {
              id: new Date(),
              date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              text: action.payload,
              color:
                tailwindColors[
                  Math.floor(Math.random() * tailwindColors.length)
                ],
              pinned: false,
            },
          ],
        };

      case "DELETE_NOTE":
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };

      case "PIN_NOTE":
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload
              ? { ...note, pinned: !note.pinned }
              : note
          ),
        };

      case "SEARCH_QUERY":
        return {
          ...state,
          searchQuery: action.payload,
        };

      default:
        return state;
    }
  }

  return (
    <>
      <NotesContext.Provider
        value={{ notesState, dispatch, setOpenModal, openModal }}
      >
        <div className="w-full min-h-screen flex gap-2">
          <div className="border-r-2 min-h-screen w-[10vw] text-center">
            <motion.h1
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
              className="pt-4 tracking-wider font-bold hover:cursor-pointer"
            >
              SMART NOTES
            </motion.h1>
            <motion.button onClick={() => setOpenModal(!openModal)}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.1 }}
                src="/add.svg"
                alt="Add Note"
                className="w-14 mt-10"
              />
            </motion.button>
          </div>
          <div className="w-[85vw] pt-2 flex flex-col ">
            <NoteSearch />
            <NoteList />
            <NoteInput />
          </div>
        </div>
      </NotesContext.Provider>
    </>
  );
}

export default App;
