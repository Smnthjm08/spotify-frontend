import useAuth from "@/hooks/use-auth";
import { getUsersRequest } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Music, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User } from "@/types/types";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function FriendsActivity() {
  const { user } = useAuth();
  const { isPending, isSuccess, data } = useQuery({
    queryFn: getUsersRequest,
    queryKey: ["users"],
  });

  const isPLaying = true;

  return (
    <main className="bg-zinc-900">
      {isPending && <div>Loading...</div>}
      <div className="p-5 flex justify-between items-center">
        <span className="font-medium">Friend Activity</span>
        <X className="size-5" />
      </div>

      <div>
        {user ? (
          data?.length ? (
            <div>
              {data.map((user: User) => {
                return (
                  <div
                    key={user._id}
                    className="p-5 flex justify-between gap-4 items-center"
                  >
                    <div>
                      <Avatar className="cursor-pointer size-12 border-zinc-800 border">
                        <AvatarImage
                          src="https://github.com/Smnthjm08.png"
                          alt="profile"
                        />
                        <AvatarFallback>
                          {user.username.slice(0, 2) || "N/A"}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className=" flex items-center gap-2">
                        <span className="font-medium text-sm text-white">
                          {user.username}{" "}
                        </span>
                        {isPLaying && (
                          <Music className="size-4 text-green-600" />
                        )}
                      </div>

                      {isPLaying ? (
                        <div className="mt-1">
                          <div className="mt-1 text-sm text-white font-medium truncate">
                            Starlight Intruder
                          </div>
                          <div className="text-xs text-zinc-400 truncate">
                            by The Weekend
                          </div>
                        </div>
                      ) : (
                        <div className="mt-1 text-xs text-zinc-400">Idle</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-5">No friends activity</div>
          )
        ) : (
          <div className="p-5">
            Get connected with your friends by{" "}
            <span className="hover:underline hover:cursor-pointer">
              <Link to="register">Signing in</Link>
            </span>
          </div>
        )}
        {isSuccess && <div> </div>}
      </div>
    </main>
  );
}
