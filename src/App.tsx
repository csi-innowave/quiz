import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz.jsx";
import Leaderboard from "./components/Leaderboard";
import Result from "./components/result.jsx";
import { CheckUserExist } from "./helper/helper";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        {" "}
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/result",
    element: (
      // <CheckUserExist>

      <Result />
      // </CheckUserExist>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
