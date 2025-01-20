import { getAlbumsRequest } from "@/lib/api";
import { Album } from "@/types/types";
import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

export const ALBUM = "album";

const useAlbums = (
  options: Omit<
    UseQueryOptions<Album[], Error, Album[], QueryKey>,
    "queryKey" | "queryFn"
  > = {}
) => {
  const { data: albums = [], ...rest } = useQuery<Album[], Error>({
    queryKey: [ALBUM],
    queryFn: getAlbumsRequest,
    ...options, // Only spreading non-conflicting options
  });

  return { albums, ...rest };
};

export default useAlbums;
