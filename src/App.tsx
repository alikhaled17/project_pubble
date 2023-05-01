import { HashRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import AppSettingsProvider from "@/components/AppSettingsProvider/AppSettingsProvider.component";
import Loader from "@/components/Global/Loader/Loader.component";
import Routes from "@/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AppSettingsProvider>
      <Suspense fallback={<Loader />}>
        <Loader id="app-loader" />
        <ToastContainer
          className="toast-message"
          position="top-center"
          autoClose={10500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </AppSettingsProvider>
  );
}

export default App;
