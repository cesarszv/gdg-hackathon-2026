import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./landing/Landing";
import { Console } from "./dashboard/Console";

export const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/app", element: <Console /> },
]);
