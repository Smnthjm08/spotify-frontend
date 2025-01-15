import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import LoginPage from "./app/(auth)/login-page";
import RegisterPage from "./app/(auth)/register-page";
import ForgotPasswordPage from "./app/(auth)/forgot-password";
import VerifyEmailPage from "./app/(auth)/verify-email";
import ResetPasswordPage from "./app/(auth)/reset-password";
import AppContainer from "./components/app-continer";
import DashBoard from "./components/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email/:code" element={<VerifyEmailPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
