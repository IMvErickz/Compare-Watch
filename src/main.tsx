import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { Routes } from "./router";
import "./index.css";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <main className="w-screen h-screen size-[100%] flex flex-col items-center justify-center">
        <Routes />
        <Footer />
      </main>
    </Theme>
  </React.StrictMode>
);
