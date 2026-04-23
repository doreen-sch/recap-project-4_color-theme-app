import "./Color.css";
import { useEffect, useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [colorContrast, setColorContrast] = useState(null);

  useEffect(() => {
    async function postFetch() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      setColorContrast(data.overall);
    }
    postFetch();
  }, [color]);

  return (
    <article
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h2 className="color-card-highlight">{color.role}</h2>
      <p>
        {color.hex}
        <CopyToClipboard hex={color.hex} />
      </p>
      <p>{color.contrastText}</p>
      <p>
        <span
          className={
            colorContrast === "Yup"
              ? "contrast-yup"
              : colorContrast === "Kinda"
                ? "contrast-kinda"
                : "contrast-nope"
          }
        >
          Overall Contrast Score: {colorContrast}
        </span>
      </p>
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
            onAddColor={(newColor) => {
              onEditColor(color.id, newColor);
              setEditColor(false);
            }}
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
