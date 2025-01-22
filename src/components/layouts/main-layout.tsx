import { Navigate, Outlet } from "react-router-dom";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import useAuth from "@/hooks/use-auth";
import LeftSideBar from "./left-sidebar";
import FriendsActivity from "./friends-activity";
// import TopBar from "../global/top-bar";

const MainLayout = () => {
  const { user, isLoading } = useAuth();
  const isMobile = false;

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 flex overflow-hidden p-2"
      >
        <ResizablePanel
          defaultSize={20}
          minSize={isMobile ? 0 : 10}
          maxSize={30}
        >
          <LeftSideBar />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
          {/* <TopBar user={user} /> */}
          {isLoading ? (
            "Loading..."
          ) : user ? (
            <Outlet />
          ) : (
            <Navigate
              replace
              to="/login"
              state={{ redirectUrl: window.location.pathname }}
            />
          )}
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        <ResizablePanel
          defaultSize={20}
          minSize={0}
          maxSize={25}
          collapsedSize={0}
          collapsible={true}
        >
          <FriendsActivity />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
export default MainLayout;
