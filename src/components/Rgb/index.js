export default function Rgb({ colors }) {
  function convertColor(color) {
    if ((color.substring(0, 1) === "#") & (colors.length === 7)) {
      color = color.substring(1);
    } else if (color.substring(0, 1) !== "#" || colors.length <= 7) {
      return (color = " ");
    }
    let rgbColor = {};
    rgbColor.r = parseInt(color.substring(0, 2), 16);
    rgbColor.g = parseInt(color.substring(2, 4), 16);
    rgbColor.b = parseInt(color.substring(4), 16);

    return "rgb(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ")";
  }
  return (
    <div className="colors-rgb">
      <p>{colors.length <= 7 ? convertColor(colors) : "Ошибка!"}</p>
    </div>
  );
}
