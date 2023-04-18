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

import {FitnessCenterOutlined , CalendarMonth, ChatBubbleOutlineOutlined, InsertChartOutlinedTwoTone, AccountCircleOutlined ,RestaurantOutlined,MedicationOutlined } from '@mui/icons-material';

import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { ColorModeContextProvider } from "contexts";
import { Title, Sider, Layout, Header } from "components/layout";

import { Calendar, DietPlans, Home, MyGrowthChart, MyProfile,TrainPrograms, Login,SupplementPlan} from "pages";



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

      //Save user to MongoDB

      /* if(user) {
        const response = await fetch('http://localhost:8080/api/v1/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            age: user.age,
            phone: user.phone_number,
            weight: user.weight,
            height: user.height,
            job: user.job,
            diseases: user.diseases,
            drug: user.drug,

          })
        })
        const data = await response.json()

        if(response.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            userid: data._id
          })
        )
      } else {
        return Promise.reject()
      }

      }
 */

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
          resources={
            [
           
              {
              name: "Dashboard",
              list: Home,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              canDelete: true,
              
            },
            {
              name: "DietPlan",
              options: {label: 'Diet Plan'},
              list: DietPlans,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              icon: < RestaurantOutlined />,
              canDelete: true,
              
            },
            {
              name: "SupplementPlan",
              options: {label: 'Supplement'},
              list: SupplementPlan,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              icon: < MedicationOutlined />,
              canDelete: true,
              
            },
            {
              name: "TrainProgram",
              options: {label: 'Train'},
              list: TrainPrograms,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              icon: < FitnessCenterOutlined />,
              canDelete: true,
              
            },
            {
              name: "Calendar",
              list: Calendar,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              icon: <CalendarMonth />,
              canDelete: true,
              
            },
            {
              name: "Messages",
              list: Home,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              icon: < ChatBubbleOutlineOutlined />,
              canDelete: true,
              
            },
            {
              name: "MyGrowthChart",
               options: {label: 'Growth Chart'},
              list: MyGrowthChart,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              icon: <InsertChartOutlinedTwoTone />,
              canDelete: true,
              
            },
            {
              name: "my-profile",
               options: {label: 'My Profile'},
              list: MyProfile,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              icon: < AccountCircleOutlined />,
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
  );}


export default App;
