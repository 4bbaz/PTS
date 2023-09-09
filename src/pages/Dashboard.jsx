import Button from "../components/Button";
import ListTrainees from "../components/ListTrainees";
import { useNavigate } from "react-router-dom";
import style from './Dashboard.module.scss'

function Dashboard() {
  const navigateTo = useNavigate();

  const handleAddTrainee = () => {
    navigateTo("/addTrainee");
  };

  return (
    <div className={style.main_content}> 
      <Button name="Add Trainee" size="large" click={handleAddTrainee} />
      <ListTrainees />
    </div>
  );
}

export default Dashboard;
