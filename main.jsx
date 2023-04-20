import React from "react";
import ReactDom from "react-dom/client";
import { GitExportApp } from "./GitExportApp";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StricMode>
    <GitExportApp />
  </React.StricMode>
);

