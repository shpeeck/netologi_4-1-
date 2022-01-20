import React, { useState } from "react";
import Form from "../Form";
import Rgb from "../Rgb";

export default function Colors() {
  const onNameChange = (e) => {
    setColor(e.target.value);
  };
  const [color, setColor] = useState("#ffffff");
  const stylesObj = () => {
    if (color.length === 7) {
      return { background: color };
    }
  };
  return (
    <div style={stylesObj()} className="colors-wrapper">
      <Form color={color} onNameChange={onNameChange} />
      <Rgb colors={color} />
    </div>
  );
}
