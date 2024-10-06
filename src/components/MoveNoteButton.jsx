import React from "react";

function MoveNoteButton({ id, onMove }) {
  return (
    <button className="move-btn" onClick={() => onMove(id)}>
      Pindahkan
    </button>
  );
}

export default MoveNoteButton;
