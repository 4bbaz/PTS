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
  };

  return (
    <div className={style.grid}>
      <h3 className={style.header}>Fill Out Course Details</h3>
      <div className={style.item1}>
        <Input label="Course" type="text" value={course} onChange={setCourse} />
        <Input
          label="Assignment Mark"
          type="text"
          value={assignmentMark}
          onChange={setAssignmentMark}
        />
        <Input
          label="Demo Mark"
          type="text"
          value={demoMark}
          onChange={setDemoMark}
        />
        <Input
          label="Mock Interview Mark"
          type="text"
          value={mockInterviewMark}
          onChange={setMockInterviewMark}
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
