import { motion } from "framer-motion";
import Button from "./Button";
import Input from "./Input";
import style from "./filloutcoursedetails.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FilloutCourseDetails() {
  const [course, setCourse] = useState("");
  const [assignmentMark, setAssignmentMark] = useState("");
  const [demoMark, setDemoMark] = useState("");
  const [mockInterviewMark, setMockInterviewMark] = useState("");

  const handleSubmit = (e) => {
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
      className={style.addtrainee}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/dashboard">
        {" "}
        <span className={style.closebutton}></span>
      </Link>
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
          <Button name="save" size="normal" click={handleSubmit} />
        </div>
      </div>
    </motion.div>
  );
}
