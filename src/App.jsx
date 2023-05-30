// import Home from "./components/Home";
import Login from "./pages/Login";
import "./App.scss";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Multiform from "./pages/Multiform";


function App() {
  return (
    <main>
      <NavBar />
      {/* <div className="main_container">{ <Login />} </div> */}
      <div className="main_content">
        {/* <Dashboard /> */}
        <Multiform/> 
      </div>
    </main>
  );
}

export default App;
