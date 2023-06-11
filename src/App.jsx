import Login from "./pages/Login";
import "./App.scss";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import TraineeDetails from "./pages/TraineeDetails";
import FillOutDetails from "./pages/FillOutDetails";
import FilloutCourseDetails from "./pages/FilloutCourseDetails";
import NoFoundPage from "./pages/NoFoundPage";

function App() {
  const location = useLocation();
  return (
    <main>
      {location.pathname !== "/" && <NavBar />}

      <div className="main_content ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addcourse/:id" element={<FilloutCourseDetails />} />
          <Route path="/viewtrainee/:id" element={<TraineeDetails />} />
          <Route path="/addTrainee" element={<FillOutDetails />} />
          <Route path="/update/:id" element={<FillOutDetails />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
