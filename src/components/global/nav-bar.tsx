import { User } from "@/types/types";
import { UserMenu } from "../menus/user-menu";
import { Link } from "react-router-dom";
import { LayoutDashboardIcon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function NavBar({ user }: { user: User }) {
  const isAdmin = true;
  return (
    <nav
      className="flex items-center justify-between p-4 pl-6 pr-6 sticky top-0 bg-zinc-900/75 
      backdrop-blur-md z-10
    "
    >
      <div className="flex gap-2 items-center">
        <img src="/logos.svg" className="size-8" alt="Spotify logo" />
        <span className="font-bold text-xl">Spotify</span>
      </div>
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
          <UserMenu user={user} />
        ) : (
          <Link>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
