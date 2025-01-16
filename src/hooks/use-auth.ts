import { getUserRequest } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const AUTH = "auth";

const useAuth = (options = {}) => {
  const { data: user, ...rest } = useQuery({
    queryKey: [AUTH],
    queryFn: getUserRequest,
    staleTime: Infinity,
    ...options,
  });
  return { user, ...rest };
};

export default useAuth;
