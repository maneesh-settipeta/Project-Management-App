import { createContext } from "react";
export const CreateContext = createContext({
  projects: [],
  projectStateStatus: 1,
});
console.log(CreateContext.tasksItems, "StoreComp");
