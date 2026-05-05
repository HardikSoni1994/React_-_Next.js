import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../page/HomePage";
import AddCarPage from "../page/AddCarPage";
import ViewCarPage from "../page/ViewCarPage";
import EditCarPage from "../page/EditCarPage";
import NotFoundPage from "../page/NotFoundPage";
import CarDetailsPage from "../page/carDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "addCar",
        Component: AddCarPage,
      },
      {
        path: "viewCar",
        Component: ViewCarPage,
      },
      {
        path: "editCar/:id",
        Component: EditCarPage,
      },
      {
        path: "carDetails/:id",
        Component: CarDetailsPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);
