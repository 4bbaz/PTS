import Button from "../components/Button";
import ListTrainees from "../components/ListTrainees";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigateTo = useNavigate();

  const handleAddTrainee = () => {
    navigateTo("/addTrainee");
  };

  return (
    <div> 
      <Button name="Add Trainee" size="large" click={handleAddTrainee} />
      <ListTrainees />
    </div>
  );
}

export default Dashboard;
