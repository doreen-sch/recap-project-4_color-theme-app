import "./App.css";
import ColorCardList from "./Components/ColorCardList/ColorCardList";
import { initialColors } from "./lib/colors";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: nanoid() };
    setColors([colorWithId, ...colors]);
  }

  function handleDeleteColor(id) {
    const deletedColor = colors.filter((color) => color.id !== id);
    setColors(deletedColor);
  }

  function handleEditColor(id, newColor) {
    const editedColor = { ...newColor, id: id };
    setColors(colors.map((color) => (color.id === id ? editedColor : color)));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} buttonLabel="add color" />
      <ColorCardList
        colors={colors}
        onDeleteColor={handleDeleteColor}
        onEditColor={handleEditColor}
      />
    </>
  );
}

export default App;
