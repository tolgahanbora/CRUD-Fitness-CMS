import { useAuth0 } from "@auth0/auth0-react";

export const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => loginWithRedirect()}>Sign in with Auth0</button>
    </div>
  );
};
