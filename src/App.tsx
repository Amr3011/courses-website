import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
