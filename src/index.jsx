import React from "react";
import { LandingPage } from "./screens/LandingPage";
import * as ReactDOM from "react-dom/client";
import App from './app'

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const app = document.getElementById("app");
// const root = ReactDOMClient.createRoot(app);
// root.render(<LandingPage />);
