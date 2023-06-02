import PropTypes from "prop-types";

import style from "./button.module.scss";
function Button({ name, size, click, type }) {
  return (
    <div className={style.btn}>
      <button
        type={type}
        onClick={click}
        className={`${style.button} ${style[size]}`}
      >
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  click: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
