import { useState } from "react";
import { createContext } from "react";
export const CreateContext = createContext({
  projects: [],
  projectStateStatus: 1,
  isUserLoggedIn: false,
  handleUserLoginPage: () => {},
  handleTasksData: () => {},
  handleSaveData: () => {},
  updateProjectState: () => {},
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

  function updateProjectState(status, id = null) {
    console.log(status, id, "coming");
    setProjectState((prevState) => {
      let updatedProjects = prevState.projects;
      if (status === "delete" && id) {
        console.log(status, id, "if loop");
        updatedProjects = updatedProjects.filter(
          (project) => project.id !== id
        );
        status = undefined;
      }
      return {
        ...prevState,
        projects: updatedProjects,
        projectStateStatus: status,
      };
    });
  }

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
    handleTasksData,
    handleSaveData,
    updateProjectState,
  };

  return (
    <CreateContext.Provider value={projectsData}>
      {children}
    </CreateContext.Provider>
  );
}
