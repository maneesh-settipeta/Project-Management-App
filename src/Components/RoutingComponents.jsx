import Header from "./Header";
import SideBarRight from "./SideBarRight";
import { useContext } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";
import LoginPage from "./LoginPage";
import { Outlet } from "react-router-dom";

function RoutingComponents() {
  const { isUserLoggedIn } = useContext(CreateContext);

  return (
    <main className="h-screen flex flex-col overflow-hidden">
      {isUserLoggedIn ? (
        <>
          <div>
            <Header />
          </div>
          <div className="flex flex-grow ">
            <Outlet />
            <SideBarRight />
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}

export default RoutingComponents;
