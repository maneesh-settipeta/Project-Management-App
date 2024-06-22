import { useState } from "react";
import { createContext } from "react";
export const CreateContext = createContext({
  projects: [],
  projectStateStatus: 1,
});

export default ProjectContext({ children });
{
  const [projectState, setProjectState] = useState({
    projectStateStatus: undefined,
    projects: [],
    uniqueId: 0,
    isUserLoggedIn: false,
  });

  const { tasksItems } = useContext(CreateContext);
  console.log(tasksItems, "TaskItemsInApp.JSX");

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

  function handleTasksData(tasksItems) {
    console.log(tasksItems, "AppRecieving");
    setProjectState((prevState) => {
      const projectIndex = prevState.projects.findIndex(
        (project) => project.id === selectedprojected.id
      );

      const updatedProject = {
        ...prevState.projects[projectIndex],
        tasks: tasksItems,
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
    projectStateStatus: projectState.projectStateStatus,
  };
  // console.log(projectsData, "App.jsx");

  return (
    <CreateContext.Provider value={projectsData}>
      {children}
    </CreateContext.Provider>
  );
}
