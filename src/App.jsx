import CreateProjects from "./Components/CreateProjects";
import LoginPage from "./Components/LoginPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RoutingComponents from "./Components/RoutingComponents";
import ProjectsDashboard from "./Components/ProjectsDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutingComponents />,
    children: [
      {
        path: "auth",
        element: <LoginPage />,
      },
      { path: "home", element: <ProjectsDashboard /> },
      ,
      { path: "create-project", element: <CreateProjects /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
