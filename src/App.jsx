import Login from "./pages/Login";
import "./App.scss";
import NavBar from "./components/NavBar";

import Dashboard from "./pages/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import TraineeDetails from "./pages/TraineeDetails";
FilloutCourseDetails;
import Multiform from "./pages/Multiform";
import FillOutDetails from "./components/FillOutDetails";
import FilloutCourseDetails from "./components/FilloutCourseDetails";

function App() {
  const location = useLocation();
  return (
    <main>
      {location.pathname !== "/" && <NavBar />}
      <div className="main_content ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addcourse" element={<FilloutCourseDetails />} />
          <Route path="/trainee" element={<TraineeDetails />} />
          <Route path="/addTrainee" element={<FillOutDetails />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
