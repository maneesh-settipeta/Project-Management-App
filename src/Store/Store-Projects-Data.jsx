import { useState, useReducer } from "react";
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

function ProjectsStateUseReducer(state, action) {
  if (action.type === "ADD-PROJECT") {
    const newId = state.uniqueId + 1;
    const newProject = {
      ...action.projectDetails,
      id: newId,
    };
    return {
      ...state,
      projects: [...state.projects, newProject],
      uniqueId: newId,
      projectStateStatus: "returnDashboard",
    };
  }
  if (action.type === "UPDATE-PROJECT") {
    if (action?.payload?.status === "delete" && action.payload.id) {
      const updatedProjects = state.projects.filter(
        (project) => project.id !== state.projectStateStatus
      );
      console.log(action.payload.status, action.payload.id);
      return {
        ...state,
        projects: updatedProjects,
        projectStateStatus: "returnDashboard",
      };
    } else {
      console.log(action.pageChange);
      return {
        ...state,
        projectStateStatus: action.pageChange,
      };
    }
  }
  if (action.type === "USER-LOGIN") {
    return {
      ...state,
      isUserLoggedIn: action.isUserLoggedIn,
    };
  }
  if (action.type === "UPDATE-TASKS") {
    const selectProject = state.projects.find(
      (project) => project.id === state.projectStateStatus
    );

    const projectIndex = state.projects.findIndex(
      (project) => project.id === selectProject.id
    );

    const updatedProject = {
      ...state.projects[projectIndex],
      tasks: action.taskitems,
    };

    const finalUpdated = [
      ...state.projects.slice(0, projectIndex),
      updatedProject,
      ...state.projects.slice(projectIndex + 1),
    ];

    return {
      ...state,
      projects: finalUpdated,
    };
  } else {
    return {
      ...state,
    };
  }
}
export default function ProjectContext({ children }) {
  const [projectStateReducer, setProjectsDispatch] = useReducer(
    ProjectsStateUseReducer,
    {
      projectStateStatus: undefined,
      projects: [],
      uniqueId: 0,
      isUserLoggedIn: false,
    }
  );

  function handleSaveData(projectDetails) {
    setProjectsDispatch({
      type: "ADD-PROJECT",
      projectDetails: projectDetails,
    });
  }

  function updateProjectState(status, id = null) {
    console.log(status, id);
    if (status === "delete" && id !== "") {
      setProjectsDispatch({
        type: "UPDATE-PROJECT",
        payload: {
          status: status,
          id: id,
        },
      });
    } else {
      setProjectsDispatch({
        type: "UPDATE-PROJECT",
        pageChange: status,
      });
    }
  }

  function handleUserLoginPage(userName, userPassword) {
    let UserLoggedIn = false;
    if (userName === "user" && userPassword === "12345") {
      UserLoggedIn = true;
    }
    setProjectsDispatch({
      type: "USER-LOGIN",
      isUserLoggedIn: UserLoggedIn,
    });
  }

  function handleTasksData(tasksItems) {
    setProjectsDispatch({
      type: "UPDATE-TASKS",
      taskitems: tasksItems,
    });
  }

  const projectsData = {
    ...projectStateReducer,
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
