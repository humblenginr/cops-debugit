import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "e33c2017-bc01-4783-8c21-f28ad37a2d87",
    authority:
      "https://login.microsoftonline.com/4d0555fb-be31-4128-94f9-734927b1613d",
    redirectUri: "http://localhost:8000/calendar",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};
export const loginRequest = {
  scopes: ["Calendars.Read.Shared", "Calendars.Read"],
};
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/events",
};
