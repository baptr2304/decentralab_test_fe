import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FrontendTest from "./pages/frontendTest";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FrontendTest />
  </StrictMode>
);
