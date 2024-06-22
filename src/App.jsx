import Header from "./Components/Header";
import SideBarRight from "./Components/SideBarRight";

import LoginPage from "./Components/LoginPage";

import ProjectContext from "./Store/Store-Projects-Data";

function App() {
  return (
    <ProjectContext.Provider value={projectsData}>
      {" "}
      <main className="h-screen flex flex-col">
        {projectState.isUserLoggedIn ? (
          <>
            <div>
              <Header returnHomePage={handleReturnHomePage} />
            </div>
            <div className="flex flex-grow">
              {contentRedirect}
              <SideBarRight
                sendProjectsToSideBar={projectState.projects}
                onSaveProjectID={handleOnSaveProjectID}
                redirectCreateProject={handleRedirectCreateProjectFromSide}
              />
            </div>
          </>
        ) : (
          <LoginPage onSendUserData={handleUserLoginPage} />
        )}
      </main>
    </ProjectContext.Provider>
  );
}

export default App;
