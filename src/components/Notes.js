import React, { Fragment } from "react";

export const Notes = ({ notes }) => {
  return (
    <ul class="list-group">
      {notes.map((note) => (
        <li 
        className="list-group-item note" 
         key={note.id}>
          <div>
            <strong>{note.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
          <button type="button" className="btn btn-danger btn-sm">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
