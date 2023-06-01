import { useState } from "react";
import FillOutDetails from "../components/FillOutDetails";
import FilloutCourseDetails from "../components/FilloutCourseDetails";
import style from "./multiform.module.scss";
import PropTypes from "prop-types";
import Warning from "../components/Warning";
import { motion, AnimatePresence } from "framer-motion";

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

  const slideTransition = {
    initial: { opacity: 0, x: "0%" },
    animate: {
      opacity: 1,
      x: "0",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: "-0%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className={style.multiform_content}>
      <div className={style.mulitfrom}>
        {activeForm === 1 && (
          <motion.div
            key={1}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideTransition}
            className={style.formContainer}
          >
            <FillOutDetails onNextStep={handleNextStep} />
          </motion.div>
        )}
        {activeForm === 2 && (
          <FilloutCourseDetails
            onPreviousStep={handlePreviousStep}
            onNextStep={handleNextStep}
          />
        )}
        {activeForm === 3 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Warning onSave={handleSave} onBackEdit={handleBackEdit} />
          </motion.div>
        )}
        <span onClick={onClose} className={style.closebutton}></span>
      </div>
    </div>
  );
}

Multiform.propTypes = {
  onClose: PropTypes.func.isRequired,
};
