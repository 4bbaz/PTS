import Button from "./Button";
import style from "./dashboard.module.scss";
import ListTrainees from "./ListTrainees";
import { DataOftrainees } from "../data/Trainees";
import TraineeCount from "./TraineeCount";

function Dashboard() {
  return (
    <div className={style.content}>
      <Button name="Add Trainee" size="large" />
      <TraineeCount count="3" />
      <ListTrainees trainees={DataOftrainees} />
    </div>
  );
}

export default Dashboard;
