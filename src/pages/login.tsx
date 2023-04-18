/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';
import yatayLogo from '../assets/logoYatay.svg'
import React from 'react';




export const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();



  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img src={yatayLogo} alt="BoraTech Logo" />
      </div>

      <Button variant="contained" color="primary" onClick={async () => await loginWithRedirect()}>Sign in Personal Trainer CMS</Button>
    </div>
  );
};
