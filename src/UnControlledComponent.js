import React, { useRef, useState } from "react";
import "./styles.css";

const UncontrolledComp = () => {
  const ref = useRef();
  const [name, setName] = useState("");
  const handleChange = () => {
    const text = ref.current.value;
    setName(text);
  };

  return (
    <div className="App">
      <label>
        Name:
        <input type="text" ref={ref} onChange={handleChange} />
      </label>
      <br />
      <p>
        <label>{`Hello ${name}, Welocome to my World`}</label>
      </p>
    </div>
  );
};

export default UncontrolledComp;
