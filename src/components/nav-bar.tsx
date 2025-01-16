// NavBar.tsx
import authUser from "@/types/types";
import { UserMenu } from "./menus/user-menu";

export default function NavBar({ user }: { user: authUser }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b-2">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-end sm:px-6 lg:px-8">
        <UserMenu user={user} />
      </div>
    </nav>
  );
}