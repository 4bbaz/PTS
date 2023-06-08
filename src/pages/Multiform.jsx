import { useState } from "react";
import FillOutDetails from "../components/FillOutDetails";
import FilloutCourseDetails from "../components/FilloutCourseDetails";
import style from "./multiform.module.scss";
import PropTypes from "prop-types";
import Warning from "../components/Warning";
import { motion, AnimatePresence } from "framer-motion";
import { DataOftrainees } from "../data/Trainees";
import { useNavigate } from "react-router-dom";

export default function Multiform() {
  const [activeForm, setActiveForm] = useState(1);
  const [formData, setFormData] = useState({
    traineeDetails: {},
    courseDetails: {},
  });

  const handleNextStep = (details) => {
    setFormData((prevData) => ({ ...prevData, ...details }));
    setActiveForm(activeForm + 1);
  };

  const handlePreviousStep = () => {
    setActiveForm(activeForm - 1);
  };

  const handleBackEdit = () => {
    setActiveForm(2);
  };

  const handleSaveTraineeDetails = () => {
    const newTrainee = {
      id: DataOftrainees.length + 1,
      ...formData.traineeDetails,
      ...formData.courseDetails,
    };
    navigateTo("/dashboard");

    DataOftrainees.push(newTrainee); // Save the new trainee to the trainees data array

    console.log(DataOftrainees); // Verify the updated trainees data array
  };

  const navigateTo = useNavigate();

  const handleClose = () => {
    navigateTo("/dashboard");
  };

  const isFormCompleted = activeForm === 3;
  return (
    // <AnimatePresence>
    //   <motion.div
    //     key={activeForm}
    //     initial={{ opacity: 0, y: -100 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, transition: { duration: 0.3 } }}
    //   >
    <form
      onSubmit={handleSaveTraineeDetails}
      className={style.multiform_content}
    >
      <div className={style.mulitfrom}>
        {activeForm === 1 && (
          <FillOutDetails
            formData={formData.traineeDetails}
            onNextStep={handleNextStep}
          />
        )}
        {activeForm === 2 && (
          <FilloutCourseDetails
            formData={formData.courseDetails}
            onPreviousStep={handlePreviousStep}
            onNextStep={handleNextStep}
          />
        )}

        {isFormCompleted && <Warning onBackEdit={handleBackEdit} />}
        <span onClick={handleClose} className={style.closebutton}></span>
      </div>
    </form>
    //   </motion.div>
    // </AnimatePresence>
  );
}

Multiform.propTypes = {
  onClose: PropTypes.func.isRequired,
};
