import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { msalConfig } from "../Constants/graphConfigs";
import { AuthProvider } from "../Contexts/AuthProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </MsalProvider>
  );
}

export default MyApp;
