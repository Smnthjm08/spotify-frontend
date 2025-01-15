import useAuth from "@/hooks/use-auth";
import { Navigate, Outlet } from "react-router-dom";

const AppContainer = () => { 
  const { user, isLoading } = useAuth();

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : user ? (
        <Outlet /> // Renders child routes
      ) : (
        <Navigate 
          replace 
          to="/login" 
          state={{ redirectUrl: window.location.pathname }} 
        />
      )}
    </div>
  );
};

export default AppContainer;
