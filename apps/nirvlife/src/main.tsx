import { reportWebVitals } from "reportWebVitals";
import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import { QueryProvider } from "./Api";
import { Router } from "Router";

const ignoreA11y = new Set(["production", "ci"]);
if (!ignoreA11y.has(process.env.NODE_ENV)) {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <QueryProvider key="queryprovider" Router={Router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
