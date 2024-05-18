import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { Routes } from "./router";
import "./global.css";
import { Footer } from "./components/Footer";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      <Theme>
        <main className="w-screen h-screen size-[100%] flex flex-col items-center justify-center">
          <Routes />
          <Footer />
        </main>
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
