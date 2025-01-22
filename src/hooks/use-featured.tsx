import { getFeaturedSongsRequest } from "@/lib/api";
import { Song } from "@/types/types";
import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

export const FEATURED = "feature";

const useFeatured = (
  options: Omit<
    UseQueryOptions<Song[], Error, Song[], QueryKey>,
    "queryKey" | "queryFn"
  > = {}
) => {
  const { data: featuredSongs = [], ...rest } = useQuery<Song[], Error>({
    queryKey: [FEATURED],
    queryFn: getFeaturedSongsRequest,
    ...options,
  });

  return { featuredSongs, ...rest };
};

export default useFeatured;
