import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css"
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { registerLicense } from '@syncfusion/ej2-base';

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

// Registering Syncfusion license key
registerLicense("ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0diXn5ZcXdQRmRb");

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-16ygxilwev5320uh.us.auth0.com"
      clientId="YREB9XYOqiO2qGdAnWBFERRWsmg3JvpH"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
