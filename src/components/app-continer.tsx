import useAuth from "@/hooks/use-auth";
import { Navigate } from "react-router-dom";
import MainLayout from "@/app/dashboard/page";

const AppContainer = () => {
  const { user, isLoading } = useAuth();

  return (
    <div>
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : user ? (
          <div>
            <MainLayout />
          </div>
        ) : (
          <Navigate
            replace
            to="/login"
            state={{ redirectUrl: window.location.pathname }}
          />
          // this state is used to pass the redirect url to
          // the login page which helps in redirecting the
          // user to the previous page after login is succesful.
        )}
      </div>
    </div>
  );
};

export default AppContainer;
