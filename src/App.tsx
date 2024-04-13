import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz.jsx";
import Leaderboard from "./components/Leaderboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
