import { getSessionsRequest } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const SESSIONS = "sessions";

const useSessions = (options = {}) => {
  const { data: sessions = [], ...rest } = useQuery({
    queryKey: [SESSIONS],
    queryFn: getSessionsRequest,
    ...options,
  });

  return { sessions, ...rest };
};

export default useSessions;
