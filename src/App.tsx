import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./app/(auth)/login-page";
import RegisterPage from "./app/(auth)/register-page";
import ForgotPasswordPage from "./app/(auth)/forgot-password";
import VerifyEmailPage from "./app/(auth)/verify-email";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email/:code" element={<VerifyEmailPage />} />

      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
