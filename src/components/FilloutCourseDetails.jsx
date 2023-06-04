import { motion } from "framer-motion";
import Button from "./Button";
import Input from "./Input";
import style from "./filloutcoursedetails.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";

export default function FilloutCourseDetails({
  onPreviousStep,
  onNextStep,
  formData,
}) {
  const [course, setCourse] = useState(formData.course || "");
  const [assignmentMark, setAssignmentMark] = useState(
    formData.assignmentMark || ""
  );
  const [demoMark, setDemoMark] = useState(formData.demoMark || "");
  const [mockInterviewMark, setMockInterviewMark] = useState(
    formData.mockInterviewMark || ""
  );

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const courseDetails = {
        course,
        assignmentMark,
        demoMark,
        mockInterviewMark,
      };
      onNextStep({
        courseDetails: courseDetails,
      });
      console.log(courseDetails);
    }
  };

  const vaildNumber = (number) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};

    if (!course) validateForm.course = "Please select a course";
    if (!assignmentMark) {
      validationErrors.assignmentMark = "Please enter an assignment mark";
    } else if (!vaildNumber(assignmentMark)) {
      validationErrors.assignmentMark = "Please enter a number";
    }
    if (!demoMark) {
      validationErrors.demoMark = "please enter a demo mark ";
    } else if (!vaildNumber(demoMark)) {
      validationErrors.assignmentMark = "Please enter a number";
    }
    if (!mockInterviewMark) {
      validationErrors.mockInterviewMark = "please enter a mock interview mark";
    } else if (!vaildNumber(mockInterviewMark)) {
      validationErrors.assignmentMark = "Please enter a number";
    }
    return validationErrors;
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className={style.grid}>
        <h3 className={style.header}>Fill Out Course Details</h3>
        <div className={style.item1}>
          <Input
            label="Course"
            type="select"
            select="course"
            value={course}
            onChange={setCourse}
          />
          <Input
            label="Assignment Mark"
            type="text"
            value={assignmentMark}
            onChange={setAssignmentMark}
            error={formErrors.assignmentMark}
          />
          <Input
            label="Demo Mark"
            type="text"
            value={demoMark}
            onChange={setDemoMark}
            error={formErrors.demoMark}
          />
          <Input
            label="Mock Interview Mark"
            type="text"
            value={mockInterviewMark}
            onChange={setMockInterviewMark}
            error={formErrors.mockInterviewMark}
          />
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
                strokeWidth="2" // Update attribute name here
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Button name="save" size="normal" click={handleNext} />
        </div>
      </div>
    </motion.div>
  );
}

FilloutCourseDetails.propTypes = {
  onPreviousStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    course: PropTypes.string,
    assignmentMark: PropTypes.string,
    demoMark: PropTypes.string,
    mockInterviewMark: PropTypes.string,
  }).isRequired,
};
