import React, { useContext, useState } from "react";
import NotesContext from "../context/NotesContext";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notesState } = useContext(NotesContext);
  return (
    <>
      <div className="flex flex-wrap">
        {notesState.notes !== null
          ? notesState.notes
              .filter((note) =>
                notesState.searchQuery !== ""
                  ? note.text.includes(notesState.searchQuery)
                  : note
              )
              .map((note) => (
                <div key={note.id}>
                  <NoteItem note={note} />
                </div>
              ))
          : null}
      </div>
    </>
  );
};

export default NoteList;
