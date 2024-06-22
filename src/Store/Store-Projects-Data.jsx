import { useState } from "react";
import { createContext } from "react";
export const CreateContext = createContext({
  projects: [],
  projectStateStatus: 1,
  handleUserLoginPage: () => {},
  handleDeleteProject: () => {},
  handleReturnHomePage: () => {},
  handleOnSaveProjectID: () => {},
  handleCancelButton: () => {},
  handleDefaultPage: () => {},
  handleRedirectCreateProjectFromSide: () => {},
  handleTasksData: () => {},
  handleSaveData: () => {},
});

export default function ProjectContext({ children }) {
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

  const projectsData = {
    ...projectState,
    handleUserLoginPage,
    handleDeleteProject,
    handleReturnHomePage,
    handleOnSaveProjectID,
    handleCancelButton,
    updateHandleDefaultPage: handleDefaultPage,
    handleRedirectCreateProjectFromSide,
    handleTasksData,
    handleSaveData,
  };
  // console.log(projectsData, "App.jsx");

  return (
    <CreateContext.Provider value={projectsData}>
      {children}
    </CreateContext.Provider>
  );
}
