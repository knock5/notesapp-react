import React from "react";

function NoteBody({ title, createdAt, body }) {
  return (
    <div className="note-body">
      <h3 className="note-title">{title}</h3>
      <p className="note-date">{createdAt}</p>
      <p className="note-content">{body}</p>
    </div>
  );
}

export default NoteBody;
