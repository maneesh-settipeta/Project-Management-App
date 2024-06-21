import { createContext } from "react";
export const CreateContext = createContext({
  projects: [],
  projectStateStatus: 1,
  tasksItems: [],
});
console.log(CreateContext.tasksItems, "StoreComp");
