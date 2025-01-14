import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import queryClient from "@/config/query-client";

// kept for time being
type authUser = {
  email: string;
  _id: string;
  username: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

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
          <MenubarItem inset>Edit</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Profile</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset onClick={() => handleLogout()}>
            Logout
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
