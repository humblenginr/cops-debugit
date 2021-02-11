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
          <AuthenticatedTemplate>
            <div>Your calendar is synced</div>
            <Calendar/>
            <SignInOutButton />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <div className="d-flex flex-column">
            <SignInOutButton />
          <Calendar/>
            </div>
          </UnauthenticatedTemplate>
        </div>
    </Main>
  );
};
export default calendar;
