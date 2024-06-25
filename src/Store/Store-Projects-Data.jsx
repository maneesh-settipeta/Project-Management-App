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
        return {
          ...prevState,
          isUserLoggedIn: UserLoggedIn,
        };
      }
    });
  }

  function updateProjectState(status, id = null) {
    console.log(status, id, "coming");
    setProjectState((prevState) => {
      if (status == "delete" && id) {
        const updatedProjects = prevState.projects.filter(
          (project) => project.id !== id
        );
        return {
          ...prevState,
          projects: updatedProjects,
          projectStateStatus: undefined,
        };
      } else {
        return {
          ...prevState,
          projectStateStatus: status,
        };
      }
    });
  }

  function handleTasksData(tasksItems) {
    console.log(tasksItems, "TasksRecieving");
    setProjectState((prevState) => {
      const selectProject = prevState.projects.find(
        (project) => project.id === prevState.projectStateStatus
      );
      console.log(selectedprojected, "-", prevState.projectStateStatus);

      const projectIndex = prevState.projects.findIndex(
        (project) => project.id === selectProject.id
      );
      console.log(projectIndex);

      const updatedProject = {
        ...prevState.projects[projectIndex],
        tasks: tasksItems,
      };
      console.log(updatedProject, "Updated");

      const finalUpdated = [
        ...prevState.projects.slice(0, projectIndex),
        updatedProject,
        ...prevState.projects.slice(projectIndex + 1),
      ];
      console.log(finalUpdated, "final");

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
  console.log(selectedprojected, "not updated");

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
