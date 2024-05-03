import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import routes from "./router/routes";
import AuthProvider from "./providers/AuthProvider";
import ContentProvider from "./providers/ContentProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ContentProvider>
        <RouterProvider router={routes} />
      </ContentProvider>
    </AuthProvider>
  </React.StrictMode>
); 
