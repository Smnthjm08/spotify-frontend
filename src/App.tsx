import { Route, Routes } from "react-router-dom";
import LoginPage from "./app/(auth)/login-page";
import RegisterPage from "./app/(auth)/register-page";
import ForgotPasswordPage from "./app/(auth)/forgot-password";
import VerifyEmailPage from "./app/(auth)/verify-email";
import ResetPasswordPage from "./app/(auth)/reset-password";
import AppContainer from "./components/app-continer";
import MainLayout from "./app/dashboard/page";

// import Home from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<MainLayout />} />
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
