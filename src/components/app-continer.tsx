import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./global/top-bar";
import useAuth from "@/hooks/use-auth";

const AppContainer = () => {
  const { user, isLoading } = useAuth();

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      ) : user ? (
        <div className="flex flex-col min-h-screen">
          <NavBar user={user} />
          <main className="flex-1 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
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
