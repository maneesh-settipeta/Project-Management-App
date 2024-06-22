import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";
import { useContext } from "react";
import LoginPage from "./Components/LoginPage";
import { CreateContext } from "./Store/Store-Projects-Data";
import ProjectContext from "./Store/Store-Projects-Data";
import SelectedProject from "./Components/SelectedProject";
import CreateProjects from "./Components/CreateProjects";
import DefaultPage from "./Components/DefaultPage";

function App() {
  const {
    projects,
    handleOnSaveProjectID,
    handleRedirectCreateProjectFromSide,
    handleCancelButton,
    handleSaveData,
    updateHandleDefaultPage: handleReturnHomePage,
    handleDeleteProject,
    handleTasksData,
    projectStateStatus,
  } = useContext(CreateContext);
  console.log(projects);

  let contentRedirect;

  if (projectStateStatus === null) {
    contentRedirect = (
      <CreateProjects
        cancelButton={handleCancelButton}
        onSendData={handleSaveData}
      />
    );
  } else if (projectStateStatus === undefined) {
    contentRedirect = <DefaultPage />;
  } else {
    contentRedirect = (
      <>
        <SelectedProject
          // passSelectedProject={selectedprojected}
          deleteProject={handleDeleteProject}
          onSendTasksData={handleTasksData}
        />
      </>
    );
  }

  return (
    <ProjectContext>
      {" "}
      <main className="h-screen flex flex-col">
        {/* {projectState.isUserLoggedIn ? ( */}
        <>
          <div>
            <Header />
          </div>
          <div className="flex flex-grow">
            {contentRedirect}
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
