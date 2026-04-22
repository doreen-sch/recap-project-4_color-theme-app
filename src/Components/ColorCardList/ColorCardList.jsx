import Color from "../Color/Color";

export default function ColorCardList({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>
        <Color color={color} />
      </li>
          ))}
    </ul>
  );
}
