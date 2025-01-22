import { Song } from "@/types/types";
// import SectionGridSkeleton from "../skeletons/section-grid-skelton";
import { Button } from "../ui/button";

type sectionGridProps = {
  title: string;
  songs: Song[];
};

export default function SectionGrid({ title, songs = [] }: sectionGridProps) {
  //   if (isLoading) return <SectionGridSkeleton />;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <Button
          variant="link"
          className="text-sm text-zinc-400 hover:text-white"
        >
          Show All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div
            key={song._id}
            className="bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer"
          >
            <div className="relative mb-4">
              <div className="aspect-square rounded-md overflow-hidden  shadow-lg">
                <img
                  src={song.imageUrl}
                  alt={song.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="font-medium mb-2 truncate">{song.title}</h3>
            <p className="text-sm text-zinc-400 truncate">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
