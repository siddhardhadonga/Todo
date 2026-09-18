import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalFun } from "./Global/Index.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalFun>
        <App />
      </GlobalFun>
    </BrowserRouter>
  </StrictMode>,
);
