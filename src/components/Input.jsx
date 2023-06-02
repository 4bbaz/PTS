import PropTypes from "prop-types";
import style from "./input.module.scss";
import { useState } from "react";

function Input({ label, type, value, onChange }) {
  const handleInput = (e) => {
    onChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={style.input_content}>
      {" "}
      <br />
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input
        value={value}
        onChange={handleInput}
        className={style.input}
        type={type}
        name={label}
        id={label}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default Input;
