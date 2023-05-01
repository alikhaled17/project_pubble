import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppReduxProvider from "./components/AppReduxProvider/AppReduxProvider.component";

import "react-toastify/dist/ReactToastify.css";
import "@/styles.scss";

// To keep a tab awake and avoid an unexpected connection closure with SingalR hub.
let lockResolver;
if (navigator && navigator.locks && navigator.locks.request) {
  const promise = new Promise((res) => {
    lockResolver = res;
  });

  navigator.locks.request("unique_lock_name", { mode: "shared" }, () => {
    return promise;
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <AppReduxProvider>
    <App />
  </AppReduxProvider>
  // </React.StrictMode>
);
