import PropTypes from "prop-types";

import style from "./button.module.scss";
function Button({ name, size }) {
  return (
    <div className={style.btn}>
      <button className={`${style.button} ${style[size]}`}>{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
