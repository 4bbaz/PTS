import { motion, AnimatePresence } from "framer-motion";
import Avatar from "../components/Avatar";
import style from "./traineedetails.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourseDetailById, getTraineeById } from "../data/Trainees";
import api from "../service/api";
import Button from "../components/Button";

export default function TraineeDetails() {
  const [trainee, setTrainee] = useState({});
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchTrainee = async () => {
      try {
        const TraineeData = await getTraineeById(id);
        setTrainee(TraineeData);
        const CourseData = await getCourseDetailById(id);
        setCourse(CourseData);
      } catch (error) {
        console.error("Failed to fetch trainee:", error);
      }
    };
    fetchTrainee();
  }, [id]);

  const navigateTo = useNavigate();

  const handleAddCourse = async (id) => {
    navigateTo(`/addcourse/${id}`);
  };

  const handleDelete = async (courseId) => {
    try {
      await api.delete(`/deletecourse/${courseId}`);
      console.log("deleted the course");
      setCourse((prevCourseList) =>
        prevCourseList.filter((course) => course._id !== courseId)
      );
    } catch (error) {
      console.log("failed to delete the course");
    }
  };

  const listCourses =
    course.length === 0 ? (
      <div className={style.courseDT}>
        Not found courses <br /> Please add course{" "}
        <Button
          name="add course"
          size="large"
          click={() => handleAddCourse(trainee._id)}
        />
      </div>
    ) : (
      course.map((course) => (
        <div key={course._id} className={style.course}>
          <div>
            {}
            <p className={style.courseDT}>{course.courseName}</p>
            <p>Assignment mark: {course.assignmentMark}</p>
            <p>Demo Mark: {course.demoMark}</p>
            <p>Mock interview Mark: {course.mockInterviewMark}</p>
          </div>
          <span
            onClick={() => handleDelete(course._id, id)}
            className={style.deleteCourse}
          ></span>
        </div>
      ))
    );

  return (
    <AnimatePresence>
      <motion.div
        className={style.trainee_content}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className={style.trainee}>
          <Link to={"/dashboard"}>
            <span className={style.closebutton}></span>
          </Link>
          <div className={style.trainee_avatar_banner}>
            <Avatar size="large" photo={trainee.photoPath} />
            <h2 className={style.title}>
              {trainee.firstName + " " + trainee.lastName}
            </h2>
            <p className={style.av}>{trainee.phoneNumber}</p>
            <p className={style.av}>{trainee.email}</p>
          </div>
          <h3>Personal Details</h3>
          <div className={style.traiee_details}>
            <div>
              <p>Degree: {trainee.degree}</p>
              <p>Place: {trainee.place}</p>
              <p>Disability: {trainee.disabilityType}</p>
            </div>
            <div>
              <p>Parnet Email: {trainee.parentEmail}</p>
              <p>Parent Phone: {trainee.parentPhoneNum}</p>
              <p>Teacher email: {trainee.teacherEmail}</p>
            </div>
          </div>
          <h3>Course Details</h3>
          <div className={style.courseD}>{listCourses}</div>
          <h3>Share this report</h3>
          <div className={style.social}>
            <a href={`mailto:${trainee.parentEmail}`}>
              <span className={style.gmail}></span>
            </a>
            <a
              href={`https://wa.me/${trainee.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.whatsapp}></span>
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
