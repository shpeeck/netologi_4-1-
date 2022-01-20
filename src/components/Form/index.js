export default function Form({ color, onNameChange }) {
  return (
    <div className="colors-form">
      <form name="color">
        <input id="color" value={color} onChange={onNameChange} />
      </form>
    </div>
  );
}
