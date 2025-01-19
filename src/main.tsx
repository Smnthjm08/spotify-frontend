import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./config/query-client.ts";
import { ThemeProvider } from "./components/global/theme-providers.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <Toaster />
          <ReactQueryDevtools
            buttonPosition="bottom-right"
            initialIsOpen={false}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
