import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [editColor, setEditColor] = useState(false);

  return (
    <article
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h2 className="color-card-highlight">{color.role}</h2>
      <p>{color.hex}</p>
      <p>{color.contrastText}</p>
      {deleteMessage ? (
        <>
          <p className="color-card-highlight">Are you sure?</p>
          <button
            type="button"
            aria-label="confirm delete color"
            onClick={() => onDeleteColor(color.id)}
          >
            confirm
          </button>
          <button
            type="button"
            aria-label="cancel delete color"
            onClick={() => setDeleteMessage(false)}
          >
            cancel
          </button>
        </>
      ) : (
        <button
          type="button"
          aria-label="delete color"
          onClick={() => setDeleteMessage(true)}
        >
          delete
        </button>
      )}
      {editColor ? (
        <>
          <ColorForm
            onAddColor={(newColor) => onEditColor(color.id, newColor)}
            initialData={color}
            buttonLabel="edit color"
          />
          <button
            type="button"
            aria-label="cancel edit color"
            onClick={() => setEditColor(false)}
          >
            cancel
          </button>
        </>
      ) : (
        <button
          type="button"
          aria-label="delete color"
          onClick={() => setEditColor(true)}
        >
          edit
        </button>
      )}
    </article>
  );
}
