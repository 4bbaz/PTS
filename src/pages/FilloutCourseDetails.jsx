import { motion } from "framer-motion";
import style from "./filloutcoursedetails.module.scss";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../service/api";
import Input from "../components/Input";
import Button from "../components/Button";

export default function FilloutCourseDetails() {
  const [courseName, setCourse] = useState("");
  const [assignmentMark, setAssignmentMark] = useState("");
  const [demoMark, setDemoMark] = useState("");
  const [mockInterviewMark, setMockInterviewMark] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const { id } = useParams();
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const courseDetails = {
        courseName,
        assignmentMark,
        demoMark,
        mockInterviewMark,
      };
      console.log(courseDetails);

      try {
        const response = await api.post(`/addcourse/${id}`, courseDetails);
        console.log(response.data);
        console.log("Added course successfully");
      } catch (error) {
        console.log("Failed to add course: ", error);
      }
      navigateTo("/dashboard");
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!courseName) validationErrors.course = "Please select a course";
    if (!assignmentMark) {
      validationErrors.assignmentMark = "Please enter an assignment mark";
    } else if (!validNumber(assignmentMark)) {
      validationErrors.assignmentMark = "Please enter a valid number";
    }
    if (!demoMark) {
      validationErrors.demoMark = "Please enter a demo mark";
    } else if (!validNumber(demoMark)) {
      validationErrors.demoMark = "Please enter a valid number";
    }
    if (!mockInterviewMark) {
      validationErrors.mockInterviewMark = "Please enter a mock interview mark";
    } else if (!validNumber(mockInterviewMark)) {
      validationErrors.mockInterviewMark = "Please enter a valid number";
    }

    return validationErrors;
  };

  const validNumber = (number) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };

  return (
    <motion.div
      className={style.addTcontent}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className={style.addtrainee}>
        <Link to="/dashboard">
          <span className={style.closebutton}></span>
        </Link>
        <div className={style.grid}>
          <h3 className={style.header}>Fill Out Course Details</h3>
          <div className={style.item1}>
            <Input
              label="Course"
              type="select"
              select="course"
              value={courseName}
              onChange={setCourse}
              error={formErrors.course}
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
            <Button name="Save" size="normal" click={handleSubmit} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
