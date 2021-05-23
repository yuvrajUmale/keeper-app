import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function AddNote(noteItems) {
    // console.log("button is clicked");
    setNotes((prevItems) => {
      return [...prevItems, noteItems];
    });
  }
  function deleteItem(id) {
    setNotes((prevItems) => {
      return prevItems.filter((name, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {notes.map((newNotes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newNotes.title}
            content={newNotes.content}
            onDelete={deleteItem}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
