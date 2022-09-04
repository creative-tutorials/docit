import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardComponent from "./components/Dashboard/dashaboard";
import LoginComponent from "./components/Auth/Login";
import SignupComponent from "./components/Auth/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
