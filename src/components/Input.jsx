import PropTypes from "prop-types";
import style from "./input.module.scss";

function Input({ label, type, value, onChange, error, select }) {
  const handleInput = (e) => {
    const value = e.target.value;
    onChange(value);
    console.log(value);
  };

  return (
    <div className={style.input_content}>
      {" "}
      <br />
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      {type === "select" ? (
        <select
          value={value}
          onChange={handleInput}
          className={style.input}
          name={label}
          id={label}
        >
          <option value=""> Select</option>
          {select === "degree" && (
            <>
              <option value="B.sc">B.sc</option>
              <option value="B.com">B.com</option>
              <option value="BFA">BFA</option>
            </>
          )}
          {select === "disability" && (
            <>
              <option value="Deaf">Deaf</option>
              <option value="Hard of Hearing">Heard of Hearing</option>
              <option value="Blind">Blind</option>
            </>
          )}
          {select === "course" && (
            <>
              <option value="React JS">Python</option>
              <option value="Java">Java</option>
              <option value="HTML & CSS">HTML & CSS</option>
              <option value="JavaScript">JavaScript</option>
            </>
          )}
        </select>
      ) : (
        <input
          value={value}
          onChange={handleInput}
          className={style.input}
          type={type}
          name={label}
          id={label}
        />
      )}
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  select: PropTypes.string,
};

export default Input;
