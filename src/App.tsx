import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import DeviceInfo from "./pages/DeviceInfo/Loadable";
import Dashboard from "./pages/Devices/Loadable";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigate to="devices" />
      },
      {
        path: "devices",
        element: <Dashboard />
      },
      {
        path: "devices/:deviceId",
        element: <DeviceInfo />
      }
    ]
  );

  return <RouterProvider router={router} />;
}

export default App;
