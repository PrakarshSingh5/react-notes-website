import React, { useEffect, useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import { v4 as uuid } from 'uuid';

const Notes = ({ darkMode }) => {
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);
  const [inputText, setInputText] = useState(() => {
    const saved = localStorage.getItem("Notes");
    const initialVal = JSON.parse(saved);
    const finalVal = initialVal || [];
    setNotes(finalVal);
  });

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const saveHandler = () => {
    if (editToggle) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editToggle ? { ...note, text: inputText } : note
        )
      );
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          text: inputText,
        },
      ]);
    }

    setInputText("");
    setEditToggle(null);
  };

  const deleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='notes'>
      {notes.map((note) =>
        editToggle === note.id ? (
          <CreateNote
            key={note.id}
            inputtext={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            // Add this line if you have a date property in your Note component
            editHandler={editHandler}
            deleteHandler={deleteHandler}
            darkMode={darkMode}
          />
        )
      )}
      {editToggle === null && (
        <CreateNote
          inputtext={inputText}
          setInputText={setInputText}
          saveHandler={saveHandler}
        />
      )}
    </div>
  );
};

export default Notes;
