import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import HomePage from "../Pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
