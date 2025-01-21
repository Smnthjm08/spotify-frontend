import { getAlbumByIdRequest } from "@/lib/api";
import { Album } from "@/types/types";
import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

export const ALBUM = "album";

const useAlbumById = (
  id: string,
  options: Omit<
    UseQueryOptions<Album[], Error, Album[], QueryKey>,
    "queryKey" | "queryFn"
  > = {}
) => {
  const { data: album = [], isLoading, ...rest } = useQuery<Album[], Error>({
    queryKey: [ALBUM, id],
    queryFn: () => getAlbumByIdRequest(id),
    ...options, // Only spreading non-conflicting options
  });

  return { album, isLoading, ...rest };
};

export default useAlbumById;
