import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="component">
      <h3>Notes</h3>
      <textarea
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addNote(e.target.value);
            e.target.value = '';
            e.preventDefault();
          }
        }}
        placeholder="Type a note and press Enter"
      />
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
