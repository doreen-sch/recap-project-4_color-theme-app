import "./Color.css";

export default function Color({ color }) {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card-headline">{color.role}</p>
      <p>{color.hex}</p>
      <p>{color.contrastText}</p>
    </div>
  );
}
