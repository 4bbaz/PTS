import Button from "./Button";
import Input from "./Input";
import style from "./filloutcoursedetails.module.scss";
import PropTypes from "prop-types";

export default function FilloutCourseDetails({ onPreviousStep, onNextStep }) {
  return (
    <div className={style.grid}>
      <h3 className={style.header}>Fill Out Course Details</h3>
      <div className={style.item1}>
        <Input label="Course" type="text" />
        <Input label="Assignment Mark" type="text" />
        <Input label="Demo Mark" type="text" />
        <Input label="Mock Interview Mark" type="text" />
      </div>
      <div className={style.item2}>
        <button onClick={onPreviousStep} className={style.button}>
          <svg
            className={style.backicon}
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6666 29.3333L18.3333 22L25.6666 14.6666"
              stroke="#146C94"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <Button name="save" size="normal" click={onNextStep} />
      </div>
    </div>
  );
}

FilloutCourseDetails.propTypes = {
  onPreviousStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
};
