import React from "react";
import NoteBody from "./NoteBody";
import DeleteButton from "./DeleteButton";
import MoveNoteButton from "./MoveNoteButton";
import { showFormattedDate } from "../utils/data";

function NoteItem({ id, title, createdAt, body, onDelete, onMove }) {
  return (
    <div className="note-item">
      <NoteBody
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
      <div className="card-footer">
        <DeleteButton id={id} onDelete={onDelete} />
        <MoveNoteButton id={id} onMove={onMove} />
      </div>
    </div>
  );
}

export default NoteItem;
