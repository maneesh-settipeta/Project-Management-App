import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";
import { useContext, useEffect } from "react";
import { CreateContext } from "./Store/Store-Projects-Data";
import ProjectContext from "./Store/Store-Projects-Data";
import SelectedProject from "./Components/SelectedProject";
import CreateProjects from "./Components/CreateProjects";
import DefaultPage from "./Components/DefaultPage";
import Home from "./Components/Home";

function App() {
  const {
    projects,
    handleOnSaveProjectID,
    handleRedirectCreateProjectFromSide,
  } = useContext(CreateContext);
  console.log(projects);

  return (
    <ProjectContext>
      
      <main className="h-screen flex flex-col">
        {/* {projectState.isUserLoggedIn ? ( */}
        <>
          <div>
            <Header />
          </div>
          <div className="flex flex-grow">
            
            <Home />
            <SideBarRight
              sendProjectsToSideBar={projects}
              onSaveProjectID={handleOnSaveProjectID}
              redirectCreateProject={handleRedirectCreateProjectFromSide}
            />
          </div>
        </>
        {/* ) : (
          <LoginPage onSendUserData={handleUserLoginPage} />
        )} */}
      </main>
    </ProjectContext>
  );
}

export default App;
