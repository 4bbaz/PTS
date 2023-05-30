import PropTypes from "prop-types";
import style from "./input.module.scss";

function Input({ label, type }) {
  return (
    <div className={style.input_content}>
      {" "}
      <br />
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input className={style.input} type={type} name={label} id={label} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
