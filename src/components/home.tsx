import useAuth from "@/hooks/use-auth";
import TopBar from "./global/top-bar";
import FeaturedCard from "./cards/featured-grid-card";
import { ScrollArea } from "./ui/scroll-area";
import SectionGrid from "./cards/section-grid";
import { getMadeForYouSongsRequest, getTrendingSongsRequest } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const MADEFORYOU = "made-for-you";
const TRENDING = "trending";

const HomePage = () => {
  const { user } = useAuth();

  const { data: madeForYouSongs } = useQuery({
    queryKey: [MADEFORYOU],
    queryFn: getMadeForYouSongsRequest,
  });

  const { data: trendingSongs } = useQuery({
    queryKey: [TRENDING],
    queryFn: getTrendingSongsRequest,
  });

  return (
    <main className="rounded-md overflow-hidden h-full ¯bg-gradient-to-b from-zinc-800 to-zinc-900">
      <TopBar user={user} />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6 ">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Good Morning</h1>
          <FeaturedCard />

          <div className="space-y-8">
            <SectionGrid title="Made For You" songs={madeForYouSongs} />
            <SectionGrid title="Trending" songs={trendingSongs} />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
