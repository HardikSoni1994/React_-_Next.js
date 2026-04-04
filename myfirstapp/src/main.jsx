import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <App />
  </div>
);
