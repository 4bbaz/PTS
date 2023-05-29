import Button from "../components/Button";
import ListTrainees from "../components/ListTrainees";
import { DataOftrainees } from "../data/Trainees";
import TraineeCount from "../components/TraineeCount";

function Dashboard() {
  return (
    <div>
      <Button name="Add Trainee" size="large" />
      <TraineeCount count="3" />
      <ListTrainees trainees={DataOftrainees} />
    </div>
  );
}

export default Dashboard;
