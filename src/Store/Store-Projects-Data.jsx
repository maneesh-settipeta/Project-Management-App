import { useState, useReducer } from "react";
import { createContext } from "react";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

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
    const data = addDoc(collection(db, "projects"), newProject);

    const projectWithId = {
      ...newProject,
      id: data.id,
    };
    return {
      ...state,
      projects: [...state.projects, projectWithId],
      uniqueId: newId,
      projectStateStatus: "returnDashboard",
    };
  }
  if (action.type === "UPDATE-PROJECT") {
    if (action?.payload?.status === "delete" && action.payload.id) {
      console.log(action?.payload?.status, action?.payload?.id);
      const updatedProjects = state.projects.filter(
        (project) => project.id !== action.payload.id
      );

      return {
        ...state,
        projects: updatedProjects,
        projectStateStatus: "returnDashboard",
      };
    } else {
      console.log(action.status);
      return {
        ...state,
        projectStateStatus: action.status,
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
    const findProject = state.projects.findIndex(
      (project) => project.id === state.projectStateStatus
    );
    console.log(findProject);
    const updateTasksforproject = {
      ...state.projects[findProject],
      tasks: action.taskitems,
    };
    const updateFinalProject = [
      ...state.projects.slice(0, findProject),
      updateTasksforproject,
      ...state.projects.slice(findProject + 1),
    ];
    return {
      ...state,
      projects: updateFinalProject,
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
      projectDetails: { ...projectDetails },
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
        status: status,
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
    console.log(UserLoggedIn);
  }

  function handleTasksData(tasksItems) {
    console.log(tasksItems, "sending");
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
