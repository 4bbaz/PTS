import { useState } from "react";
import FillOutDetails from "../components/FillOutDetails";
import FilloutCourseDetails from "../components/FilloutCourseDetails";
import style from "./multiform.module.scss";
import PropTypes from "prop-types";
import Warning from "../components/Warning";

export default function Multiform({ onClose }) {
  const [activeForm, setActiveForm] = useState(1);
  const handleNextStep = () => {
    setActiveForm(activeForm + 1);
  };

  const handlePreviousStep = () => {
    setActiveForm(activeForm - 1);
  };

  const handleSave = () => {
    onClose();
  };
  const handleBackEdit = () => {
    setActiveForm(2);
  };

  return (
    <div className={style.multiform_content}>
      <div className={style.mulitfrom}>
        <div
          className={`${style.transition} ${style.transition}_${activeForm}`}
        >
          {activeForm === 1 && <FillOutDetails onNextStep={handleNextStep} />}
          {activeForm === 2 && (
            <FilloutCourseDetails
              onPreviousStep={handlePreviousStep}
              onNextStep={handleNextStep}
            />
          )}
          {activeForm === 3 && (
            <Warning onSave={handleSave} onBackEdit={handleBackEdit} />
          )}
          <span onClick={onClose} className={style.closebutton}></span>
        </div>
      </div>
    </div>
  );
}

Multiform.propTypes = {
  onClose: PropTypes.func.isRequired,
};
