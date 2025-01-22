import { User } from "@/types/types";
import { UserMenu } from "../menus/user-menu";
import { Link } from "react-router-dom";
import { LayoutDashboardIcon, Users } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function TopBar({ user }: { user: User }) {
  const isAdmin = true;

  return (
    <nav
      className="max-h-16 flex items-center rounded-md justify-between p-4 pl-6 pr-6 sticky top-0 bg-zinc-900/75 
      backdrop-blur-lg z-10
    "
    >
      <Link to="/">
        <div className="flex gap-2 items-center">
          {/* <img src="/spotify.png" className="size-8" alt="Spotify logo" /> */}
          <img src="/logos.svg" className="size-8" alt="Spotify logo" />
          <span className="font-bold text-xl">Spotify</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            to={"/admin"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LayoutDashboardIcon className="size-4  mr-2" />
            Admin Dashboard
          </Link>
        )}
        {user ? (
          <>
            <Button
              variant={"outline"}
              size={"sm"}
              className="rounded-full w-12 h-12"
            >
              <Users width={12} height={12} />
            </Button>
            <UserMenu user={user} />
          </>
        ) : (
          <Link>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
