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

const onRedirectCallback = (appState: any, history: any ): void => {
   history.push(appState?.returnTo || window.location.pathname);
};

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-16ygxilwev5320uh.us.auth0.com"
      clientId="YREB9XYOqiO2qGdAnWBFERRWsmg3JvpH"
      audience= "https://dev-16ygxilwev5320uh.us.auth0.com/api/v2/"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
