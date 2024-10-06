import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="delete-btn" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}

export default DeleteButton;
