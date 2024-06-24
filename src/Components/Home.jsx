import React, { useContext, useEffect } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";
import CreateProjects from "./CreateProjects";
import DefaultPage from "./DefaultPage";

const Home = () => {
  const {
    projects,
    handleCancelButton,
    handleSaveData,
    handleDeleteProject,
    handleTasksData,
    projectStateStatus,
  } = useContext(CreateContext);

  let contentRedirect;
  console.log(projectStateStatus);
  if (projectStateStatus === null) {
    contentRedirect = (
      <CreateProjects
        cancelButton={handleCancelButton}
        onSendData={handleSaveData}
      />
    );
  } else if (projectStateStatus === undefined) {
    contentRedirect = <DefaultPage />;
  } else {
    contentRedirect = (
      <>
        <SelectedProject
          deleteProject={handleDeleteProject}
          onSendTasksData={handleTasksData}
        />
      </>
    );
  }
  
  return <>
    {contentRedirect}
  </>;
};

export default Home;
