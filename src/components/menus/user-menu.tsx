import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import queryClient from "@/config/query-client";
import { LogOut } from "lucide-react";
import authUser from "@/types/types";

export function UserMenu({ user }: { user: authUser }) {
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
        title: "Logut Successful!",
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

  const handleLogout = () => {
    console.log("logout");
    mutate();
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Avatar>
            <AvatarImage src="https://gdithub.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{user.email.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSeparator />
          <MenubarItem inset>Account</MenubarItem>
          <MenubarSeparator />
          <Link to="/profile">
            <MenubarItem inset>Profile</MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem inset>Private Sessions</MenubarItem>
          <MenubarSeparator />
          <Link to="/settings">
            <MenubarItem inset>Settings</MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem inset onClick={() => handleLogout()}>
            <span className="text-red-500 flex items-center gap-3">
              <LogOut width={16} height={16} />
              Logout
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
