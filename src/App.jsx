import { useState } from "react";
import DefaultPage from "./Components/DefaultPage";
import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";
import InputVariables from "./Components/InputsVariables";
import CreateProjects from "./Components/CreateProjects";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateStatus: undefined,
    projects: [],
  });

  function handleDefaultPage() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateStatus: null,
      };
    });
  }

  let contentRedirect;

  if (projectState.projectStateStatus === null) {
    contentRedirect = <CreateProjects />;
  } else if (projectState.projectStateStatus === undefined) {
    contentRedirect = <DefaultPage onChangeOfPage={handleDefaultPage} />;
  }

  return (
    <main>
      <div className="bg-white pt-2 pb-2">
        <Header />
      </div>
      <div className="h-screen flex gap-8">
        {contentRedirect}
        <SideBarRight />
      </div>
    </main>
  );
}

export default App;
