import React from "react";

import { Refine, AuthProvider } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { ColorModeContextProvider } from "contexts";
import { Title, Sider, Layout, Header } from "components/layout";
import { Login } from "pages/login";

function App() {
  const { isLoading, user, logout, getIdTokenClaims } = useAuth0();

  if (isLoading) {
    return <span>loading...</span>;
  }

  const authProvider: AuthProvider = {
    login: () => {
      return Promise.resolve(false);
    },
    logout: () => {
      logout({ returnTo: window.location.origin });
      return Promise.resolve("/");
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      try {
        const token = await getIdTokenClaims();
        if (token) {
          axios.defaults.headers.common = {
            Authorization: `Bearer ${token.__raw}`,
          };
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      } catch (error) {
        return Promise.reject();
      }
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      if (user) {
        return Promise.resolve({
          ...user,
          avatar: user.picture,
        });
      }
      return Promise.reject();
    },
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "posts",
              list: MuiInferencer,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              canDelete: true,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
