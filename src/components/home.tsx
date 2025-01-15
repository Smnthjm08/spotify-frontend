import useAuth from "@/hooks/use-auth";
import { ModeToggle } from "./mode-toggle";
import { UserMenu } from "./temp-user-menu";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center gap-4 min-h-screen">
      <ModeToggle />
      <UserMenu user={user} />
import { ModeToggle } from "./global/mode-toggle";
import { UserMenu } from "./temp-user-menu";

const HomePage = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen">
        <ModeToggle />
        <UserMenu user={user} />
    </div>
  );
};

export default HomePage;
