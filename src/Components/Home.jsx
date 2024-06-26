import React, { useContext, useEffect } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";
import CreateProjects from "./CreateProjects";
import DefaultPage from "./DefaultPage";
import SelectedProject from "./SelectedProject";
import ProjectsDashboard from "./ProjectsDashboard";

const Home = () => {
  const { projectStateStatus } = useContext(CreateContext);

  let contentRedirect;

  if (projectStateStatus === null) {
    contentRedirect = <CreateProjects />;
  } else if (projectStateStatus === undefined) {
    contentRedirect = <DefaultPage />;
  } else if (projectStateStatus === "returnDashboard") {
    contentRedirect = <ProjectsDashboard />;
  } else {
    contentRedirect = <SelectedProject />;
  }

  return <>{contentRedirect}</>;
};

export default Home;
