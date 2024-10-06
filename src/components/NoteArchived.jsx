import React from "react";
import NoteItem from "./NoteItem";

function NoteArchived({ notes, onDelete, onMove }) {
  return (
    <div>
      {notes.length === 0 ? (
        <div className="empty-notes">
          <p>Tidak Ada Catatan</p>
        </div>
      ) : (
        <div className="note-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onMove={onMove}
              {...note}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NoteArchived;
