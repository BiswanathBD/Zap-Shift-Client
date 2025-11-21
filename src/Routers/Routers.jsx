import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import Coverage from "../Pages/Coverage";
import Loader from "../Components/Loader";
import SendParcel from "../Pages/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/sendParcel",
        element: <SendParcel />,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
]);
