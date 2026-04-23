import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  onAddColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
  buttonLabel,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </div>
      <div className="form-field">
        <label htmlFor="hex">Hex</label>
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </div>
      <div className="form-field">
        <label htmlFor="contrastText">Contrast Text</label>
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </div>
      <button type="submit" aria-label="add color">
        {buttonLabel}
      </button>
    </form>
  );
}
