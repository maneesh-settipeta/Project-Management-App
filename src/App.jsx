import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";
import { useContext, useEffect } from "react";
import { CreateContext } from "./Store/Store-Projects-Data";
import ProjectContext from "./Store/Store-Projects-Data";
import SelectedProject from "./Components/SelectedProject";
import CreateProjects from "./Components/CreateProjects";
import DefaultPage from "./Components/DefaultPage";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";

function App() {
  const { projects, isUserLoggedIn } = useContext(CreateContext);
  console.log(projects);
  console.log(isUserLoggedIn, "LoggedIn");
  return (
    <ProjectContext>
      <main className="h-screen flex flex-col">
        {/* {isUserLoggedIn ? ( */}
        <>
          <div>
            <Header />
          </div>
          <div className="flex flex-grow">
            <Home />
            <SideBarRight />
          </div>
        </>
        {/* // ) : (
        //   <LoginPage />
        // )} */}
      </main>
    </ProjectContext>
  );
}

export default App;
