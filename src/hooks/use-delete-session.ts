/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteSessionRequest } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SESSIONS } from "./use-sessions";

const useDeleteSessions = (sessionID: string) => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: () => deleteSessionRequest(sessionID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SESSIONS] });
      // queryClient.setQueryData([SESSIONS], (cache: any[]) =>
      //   cache.filter((session: { _id: string; }) => session._id !== sessionID)
      // );
    },
  });

  return { deleteSessionRequest: mutate, ...rest };
};

export default useDeleteSessions;
