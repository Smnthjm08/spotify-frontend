import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./app/login/page";
import RegisterPage from "./app/register/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
