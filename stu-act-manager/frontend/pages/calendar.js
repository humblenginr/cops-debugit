import React, { useEffect, useState } from "react";
import { Calendar } from "../components/calendar/Calendar";
import { Main } from "../components/layouts/Main";
import { Button } from "react-bootstrap";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react";
import { SignInOutButton } from "../components/msGraphAuthentication/SignInOutButton";

const calendar = () => {
  
  return (
    <Main>
        <div className="d-flex align-items-center vh-100 border justify-content-center">
          <Calendar />
        </div>
    </Main>
  );
};
export default calendar;
