import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SongProvider from "./contexts/songContext.jsx";
import ListProvider from "./contexts/listContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SongProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </SongProvider>
  </React.StrictMode>
);
