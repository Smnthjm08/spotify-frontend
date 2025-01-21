import { getSongsRequest } from "@/lib/api";
import { Song } from "@/types/types";
import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

export const SONG = "song";

const useSongs = (
  options: Omit<
    UseQueryOptions<Song[], Error, Song[], QueryKey>,
    "queryKey" | "queryFn"
  > = {}
) => {
  const { data: songs = [], ...rest } = useQuery<Song[], Error>({
    queryKey: [SONG],
    queryFn: getSongsRequest,
    ...options, // Only spreading non-conflicting options
  });

  return { songs, ...rest };
};

export default useSongs;
