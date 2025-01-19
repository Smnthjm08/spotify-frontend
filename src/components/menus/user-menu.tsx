import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import queryClient from "@/config/query-client";
import { LogOut } from "lucide-react";
import { User } from "@/types/types";

export function UserMenu({ user }: { user: User }) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { mutate } = useMutation({
    mutationFn: logoutRequest,
    onSettled: () => {
      queryClient.clear();
      navigate("/login", { replace: true });
    },
    onSuccess: (response) => {
      toast({
        title: "Logout Successful!",
        description:
          response?.message?.toString() || "User Logged out Successfully.",
      });
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast({
        title: "Something went wrong!",
        description: "There was a problem while logging out.",
      });
    },
  });

  console.log("UserMenu user:", user);

  const handleLogout = () => {
    console.log("logout");
    mutate();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{user.email.slice(0, 2) || "N/A"}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="end" alignOffset={-5}>
        <div className="py-2 px-2 hover:bg-grey-700 cursor-pointer border-b">
          Account
        </div>
        <Link
          to="/profile"
          className="block py-2 px-2 hover:bg-grey-700 border-b"
        >
          Profile
        </Link>
        <div className="py-2 px-2 hover:bg-grey-700 cursor-pointer border-b">
          Private Sessions
        </div>
        <Link
          to="/settings"
          className="block py-2 px-2 hover:bg-grey-700 border-b"
        >
          Settings
        </Link>
        <div
          className="py-2 px-2 hover:bg-grey-900 cursor-pointer text-red-500 flex items-center gap-3"
          onClick={() => handleLogout()}
        >
          <LogOut width={16} height={16} />
          Logout
        </div>
      </PopoverContent>
    </Popover>
  );
}
