import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import ContactPage from "../page/ContactPage";
import NotFoundPage from "../page/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: "about",
        Component: AboutPage
      },
      {
        path: "contact",
        Component: ContactPage
      },
      {
        path: "*",
        Component: NotFoundPage
      }
    ],
  },
]);