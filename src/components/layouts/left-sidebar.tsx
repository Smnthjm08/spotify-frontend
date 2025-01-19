import { cn } from "@/lib/utils";
import { HomeIcon, Library, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import useAuth from "@/hooks/use-auth";
import { ScrollArea } from "../ui/scroll-area";
import PlaylistSkeleton from "../skeletons/playlist-skeleton";

export default function LeftSideBar() {
  const { user, isLoading } = useAuth();

  return (
    <div className="h-full flex flex-col gap-2">
      {/* menu */}
      <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">
          <Link
            to="/"
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800",
              })
            )}
          >
            <HomeIcon className="mr-2 size-5" />{" "}
            <span className="hidden md:inline">Home</span>
          </Link>

          {isLoading
            ? "Loading..."
            : user && (
                <Link
                  to="/chat"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      className:
                        "w-full justify-start text-white hover:bg-zinc-800",
                    })
                  )}
                >
                  <MessageCircle className="mr-2 size-5" />{" "}
                  <span className="hidden md:inline">Messages</span>
                </Link>
              )}
        </div>
      </div>
      {/* playlists */}
      <div className="flex-1 rounded-lg bg-zinc-900 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-white px-2">
            <Library className="size-5 mr-2" />
            <span className="hidden md:inline">Playlists</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="space-y-2 ">
            {isLoading ? <PlaylistSkeleton /> : <div>helelel</div>}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
