import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [deleteMessage, setDeleteMessage] = useState(false);

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
          <button onClick={() => onDeleteColor(color.id)}>confirm</button>
          <button onClick={() => setDeleteMessage(false)}>cancel</button>
        </>
      ) : (
        <button onClick={() => setDeleteMessage(true)}>delete</button>
      )}
    </article>
  );
}
