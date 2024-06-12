import { useState } from "react";
import DefaultPage from "./Components/DefaultPage";
import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";
import CreateProjects from "./Components/CreateProjects";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateStatus: undefined,
    projects: [],
    uniqueId: 0,
  });
  console.log(projectState);

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

  function handleSaveData(projectDetails) {
    console.log(projectDetails, "Printing");

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

  let contentRedirect;

  if (projectState.projectStateStatus === null) {
    contentRedirect = (
      <CreateProjects
        cancelButton={handleCancelButton}
        onSendData={handleSaveData}
      />
    );
  } else if (projectState.projectStateStatus === undefined) {
    contentRedirect = <DefaultPage onChangeOfPage={handleDefaultPage} />;
  } else {
    contentRedirect = (
      <SelectedProject
        passSelectedProject={selectedprojected}
        deleteProject={handleDeleteProject}
      />
    );
  }

  return (
    <main>
      <div className="bg-white pt-2 pb-2">
        <Header returnHomePage={handleReturnHomePage} />
      </div>
      <div className="h-screen flex gap-8">
        {contentRedirect}
        <SideBarRight
          sendProjectsToSideBar={projectState.projects}
          onSaveProjectID={handleOnSaveProjectID}
        />
      </div>
    </main>
  );
}

export default App;
