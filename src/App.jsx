import { useState } from "react";
import DefaultPage from "./Components/DefaultPage";
import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";
import CreateProjects from "./Components/CreateProjects";
import ProjectsListPage from "./Components/ProjectsListPage";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateStatus: undefined,
    projects: [],
    uniqueId: 0,
  });
  console.log(projectState);

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: id,
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

  function handleCancelButton() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: undefined,
      };
    });
  }
  function handletoDefault() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: null,
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
    setProjectState((prevState) => {
      const newId = prevState.uniqueId + 1;
      const newProject = {
        ...projectDetails,
        id: newId,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        uniqueId: newId,
        projectStateStatus: "PROJECTPAGE",
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
  } else if (projectState.projectStateStatus === "PROJECTPAGE") {
    contentRedirect = (
      <ProjectsListPage
        passProjectDataList={projectState.projects}
        returnCreatePage={handletoDefault}
        selectedProject={handleSelectedProject}
      />
    );
  } else {
    contentRedirect = (
      <SelectedProject passSelectedProject={selectedprojected} />
    );
  }

  return (
    <main>
      <div className="bg-white pt-2 pb-2">
        <Header returnHomePage={handleReturnHomePage} />
      </div>
      <div className="h-screen flex gap-8">
        {contentRedirect}
        <SideBarRight />
      </div>
    </main>
  );
}

export default App;
