import Button from "../components/Button";
import ListTrainees from "../components/ListTrainees";
import { DataOftrainees } from "../data/Trainees";
import TraineeCount from "../components/TraineeCount";
import Multiform from "./Multiform";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dashboard() {
  const [multiform, setMultiform] = useState(false);

  const handleAddTrainee = () => {
    setMultiform(true);
  };

  const handleCloseMutiform = () => {
    setMultiform(false);
  };
  return (
    <div>
      {!multiform && (
        <>
          <Button name="Add Trainee" size="large" click={handleAddTrainee} />
          <TraineeCount count="3" />
          <ListTrainees trainees={DataOftrainees} />
        </>
      )}

      {multiform && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <Multiform onClose={handleCloseMutiform} />
        </motion.div>
      )}
    </div>
  );
}

export default Dashboard;
