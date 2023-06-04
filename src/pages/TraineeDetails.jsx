import { motion, AnimatePresence } from "framer-motion";
import Avatar from "../components/Avatar";
import style from "./traineedetails.module.scss";
import { useNavigate } from "react-router-dom";

export default function TraineeDetails() {
  const navigateTo = useNavigate();
  const handleClose = () => {
    navigateTo("/dashboard");
  };
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
          <span onClick={handleClose} className={style.closebutton}></span>
          <div className={style.trainee_avatar_banner}>
            <Avatar size="large" />
            <h2 className={style.title}>Althaf Hassan</h2>
            <p className={style.av}>+9134534623</p>
            <p className={style.av}>althafhassan@gmail.com</p>
          </div>
          <h3>Personal Details</h3>
          <div className={style.traiee_details}>
            <div>
              <p>Degree: BSc (cs)</p>
              <p>Place: Malapuram</p>
              <p>Disability: Deaf</p>
            </div>
            <div>
              <p>Parnet Email: Hassan@gmail.com</p>
              <p>Parent Phone: +912349532</p>
              <p>Teacher email: teacher@gmail.com</p>
            </div>
          </div>
          <h3>Course Details</h3>
          <p>Course: Computer Science</p>
          <p>Assignment mark: 100</p>
          <p>Demo Mark: 80</p>
          <p>Mock interview Mark: 80</p>
          <h3>Share this report</h3>
          <div className={style.social}>
            <span className={style.whatsapp}></span>
            <span className={style.gmail}></span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
