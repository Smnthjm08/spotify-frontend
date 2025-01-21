import useAuth from "@/hooks/use-auth";
import TopBar from "./global/top-bar";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <TopBar user={user} />
      <div className="flex items-center font-semibold justify-center gap-4 min-h-screen">
        Welcome to the home page user:{" "}
        <span className="text-blue-400">{user?.username}</span>
        email:
        <span className="text-blue-300">{user?.email} </span>
      </div>
    </div>
  );
};

export default HomePage;
