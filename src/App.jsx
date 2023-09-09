import Login from "./pages/Login";
import "./App.scss";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import TraineeDetails from "./pages/TraineeDetails";
import FillOutDetails from "./pages/FillOutDetails";
import FilloutCourseDetails from "./pages/FilloutCourseDetails";
import NoFoundPage from "./pages/NoFoundPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  return (
    <main>
      {location.pathname !== "/" &&
        location.pathname !== "/about" &&
        location.pathname !== "/contact" && <NavBar />}

      <div className=" ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
