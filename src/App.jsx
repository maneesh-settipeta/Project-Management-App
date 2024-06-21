import { useState } from "react";
import DefaultPage from "./Components/DefaultPage";
import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";
import CreateProjects from "./Components/CreateProjects";
import SelectedProject from "./Components/SelectedProject";
import Tasks from "./Components/Tasks";
import LoginPage from "./Components/LoginPage";
import { CreateContext } from "./Store/Store-Projects-Data";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateStatus: undefined,
    projects: [],
    uniqueId: 0,
    isUserLoggedIn: false,
  });

  function handleUserLoginPage(userName, userPassword) {
    setProjectState((prevState) => {
      let UserLoggedIn = false;
      if (userName === "user" && userPassword === "12345") {
        UserLoggedIn = true;
      }

      return {
        ...prevState,
        isUserLoggedIn: UserLoggedIn,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== id
      );
      return {
        ...prevState,
        projects: updatedProjects,
        projectStateStatus: undefined,
      };
    });
  }

  function handleReturnHomePage() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: undefined,
      };
    });
  }

  function handleOnSaveProjectID(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: id,
      };
    });
  }

  function handleCancelButton() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: undefined,
      };
    });
  }

  function handleDefaultPage() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: null,
      };
    });
  }

  const handleRedirectCreateProjectFromSide = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: null,
      };
    });
  };

  function handleTasksData(projectsTasks) {
    setProjectState((prevState) => {
      const projectIndex = prevState.projects.findIndex(
        (project) => project.id === selectedprojected.id
      );

      const updatedProject = {
        ...prevState.projects[projectIndex],
        tasks: projectsTasks,
      };

      const finalUpdated = [
        ...prevState.projects.slice(0, projectIndex),
        updatedProject,
        ...prevState.projects.slice(projectIndex + 1),
      ];

      return {
        ...prevState,
        projects: finalUpdated,
      };
    });
  }

  function handleSaveData(projectDetails) {
    setProjectState((prevState) => {
      const newId = prevState.uniqueId + 1;
      const newProject = {
        ...projectDetails,
        id: newId,
      };
      return {
        ...prevState,
        projectStateStatus: undefined,
        projects: [...prevState.projects, newProject],
        uniqueId: newId,
      };
    });
  }

  const selectedprojected = projectState.projects.find(
    (project) => project.id === projectState.projectStateStatus
  );

  let contentRedirect;

  if (projectState.projectStateStatus === null) {
    contentRedirect = (
      <CreateProjects
        cancelButton={handleCancelButton}
        onSendData={handleSaveData}
      />
    );
  } else if (projectState.projectStateStatus === undefined) {
    contentRedirect = <DefaultPage onChangeOfPage={handleDefaultPage} />;
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
  const projectsData = {
    projects: projectState.projects,
  };
  console.log(projectsData.projects, "App.jsx");

  return (
    <CreateContext.Provider value={projectsData}>
      {" "}
      <main className="h-screen flex flex-col">
        {projectState.isUserLoggedIn ? (
          <>
            <div>
              <Header returnHomePage={handleReturnHomePage} />
            </div>
            <div className="flex flex-grow">
              {contentRedirect}
              <SideBarRight
                sendProjectsToSideBar={projectState.projects}
                onSaveProjectID={handleOnSaveProjectID}
                redirectCreateProject={handleRedirectCreateProjectFromSide}
              />
            </div>
          </>
        ) : (
          <LoginPage onSendUserData={handleUserLoginPage} />
        )}
      </main>
    </CreateContext.Provider>
  );
}

export default App;
