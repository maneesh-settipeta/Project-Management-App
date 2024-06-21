import { createContext } from "react";
export const CreateContext = createContext({
  projects: [],
  tasks: [],
});
console.log(CreateContext.projects, "Store");
