import "./Color.css";

export default function Color({ color }) {
  return (
    <article
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h2 className="color-card-headline">{color.role}</h2>
      <p>{color.hex}</p>
      <p>{color.contrastText}</p>
    </article>
  );
}
