import Button from "../components/Button";
import ListTrainees from "../components/ListTrainees";
import { DataOftrainees } from "../data/Trainees";
import TraineeCount from "../components/TraineeCount";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigateTo = useNavigate();
  const handleAddTrainee = () => {
    navigateTo("/addTrainee");
  };

  return (
    <div>
      <Button name="Add Trainee" size="large" click={handleAddTrainee} />
      <TraineeCount count="3" />
      <ListTrainees trainees={DataOftrainees} />
    </div>
  );
}

export default Dashboard;
