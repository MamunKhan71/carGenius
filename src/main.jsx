import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import routes from "./router/routes";
import AuthProvider from "./providers/AuthProvider";
import ContentProvider from "./providers/ContentProvider";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ContentProvider>
          <RouterProvider router={routes} />
        </ContentProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
); 
