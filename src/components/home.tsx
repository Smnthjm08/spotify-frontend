import useAuth from "@/hooks/use-auth";
import TopBar from "./global/top-bar";
import MadeForYouCard from "./cards/made-for-you-card";
import FeaturedCard from "./cards/featured-grid-card";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <TopBar user={user} />
      <div className="flex items-center font-semibold justify-center gap-4 min-h-screen">
        <FeaturedCard />
        <MadeForYouCard />
      </div>
    </div>
  );
};

export default HomePage;
