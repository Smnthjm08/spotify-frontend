import { ScrollArea } from "@/components/ui/scroll-area";
import useAlbumById from "@/hooks/use-albumById";
import { formatToYear } from "@/lib/helpers";
import { Pause, Play } from "lucide-react";

import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AlbumTable from "@/components/tables/album-table";
import { Album } from "@/types/types";

const AlbumPage = () => {
  const { id } = useParams<{ id: string }>();
  const { album, isLoading }: {album: Album} = useAlbumById(id || "");

  return (
    <div className="h-full rounded-md pt-2">
      <ScrollArea className="h-full">
        {isLoading ? (
          <></>
        ) : (
          <div className="relative min-h-full">
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80
					 to-zinc-900 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex p-6 gap-6 pb-8">
                <img
                  src={album?.imageUrl}
                  alt="album-cover"
                  className="w-[240px] h-[240px] shadow-xl rounded"
                />
                <div className="flex flex-col justify-end">
                  <p className="text-sm font-medium">Album</p>
                  <h1 className="text-7xl font-bold my-4">{album?.title}</h1>
                  <div className="flex items-center gap-2 text-sm text-zinc-100">
                    <span className="font-medium text-white ">
                      {album.artist}
                    </span>
                    <span>
                      • {album?.songs?.length}{" "}
                      {album?.songs?.length === 1 ? "Song" : "Songs"}
                    </span>
                    <span>
                      •{" "}
                      {album?.releaseYear
                        ? formatToYear(album.releaseYear.toString())
                        : "Unknown Year"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-4 flex items-center gap-6">
                <Button
                  // onClick={handlePlayAlbum}
                  size="icon"
                  className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 
                hover:scale-105 transition-all"
                >
                  {/* {isPlaying && album?.songs.some((song) => song._id === currentSong?._id) ? ( */}
                  {/* {album?.songs.some((song) => song._id === album?._id) ? ( */}
                  {/* <Pause className="h-7 w-7 text-black" fill="" /> */}
                  {/* ) : ( */}
                  <Play className="h-7 w-7 text-black" />
                  {/* )} */}
                </Button>
              </div>

              <AlbumTable album={album} />
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default AlbumPage;
