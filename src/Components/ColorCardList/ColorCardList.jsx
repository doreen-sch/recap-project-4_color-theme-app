import Color from "../Color/Color";
import "./ColorCardList.css";

export default function ColorCardList({ colors, onDeleteColor }) {
  return colors.length === 0 ? (
    <p>no colors left</p>
  ) : (
    <ul className="color-card-list">
      {colors.map((color) => (
        <li key={color.id}>
          <Color color={color} onDeleteColor={onDeleteColor} />
        </li>
      ))}
    </ul>
  );
}
