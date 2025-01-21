import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/home";
import LoginPage from "./app/auth/login-page";
import RegisterPage from "./app/auth/register-page";
import ForgotPasswordPage from "./app/auth/forgot-password";
import VerifyEmailPage from "./app/auth/verify-email";
import ResetPasswordPage from "./app/auth/reset-password";
import Profile from "./app/user/profile-page";
import SettingsPage from "./app/user/settings-page";
import SessionsPage from "./app/user/sessions-page";
import { setNavigate } from "./lib/navigation";
import MainLayout from "./components/layouts/main-layout";
import ChatPage from "./components/chat-page";
import AlbumPage from "./app/album/album-page";

function App() {
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="verify-email/:code" element={<VerifyEmailPage />} />
      <Route path="reset-password" element={<ResetPasswordPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="album/:id" element={<AlbumPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings">
          <Route index element={<SettingsPage />} />
          <Route path="sessions" element={<SessionsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
