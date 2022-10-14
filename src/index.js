import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import tasksData from "./data/tasks.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:taskSlug/" element={<App />} />
        <Route
          path="*"
          element={<Navigate to={`/${tasksData[0].slug}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
