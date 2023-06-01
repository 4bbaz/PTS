import PropTypes from "prop-types";
import Button from "./Button";
import style from "./warning.module.scss";
export default function Warning({ onSave, onBackEdit }) {
  return (
    <div className={style.warning_box}>
      <h3>Are you sure to Save this details?</h3>
      <div className={style.btns}>
        <Button name="Yes" size="normal" click={onSave} />
        <Button name="No" size="normal" click={onBackEdit} />
      </div>
    </div>
  );
}

Warning.propTypes = {
  onSave: PropTypes.func.isRequired,
  onBackEdit: PropTypes.func.isRequired,
};
