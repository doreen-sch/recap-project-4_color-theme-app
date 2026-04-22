import "./App.css";
import ColorCardList from "./Components/ColorCardList/ColorCardList";
import { initialColors } from "./lib/colors";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    const colorWithId = { ...newColor, id: nanoid() };
    setColors([colorWithId, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} />
      <ColorCardList colors={colors} />
    </>
  );
}

export default App;
