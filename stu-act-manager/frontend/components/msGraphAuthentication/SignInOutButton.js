import React from 'react';
import {Button} from "react-bootstrap";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from '../../Constants/graphConfigs';

export const SignInOutButton = () => {
    const {instance} = useMsal();
    return (
        <>
        <UnauthenticatedTemplate>
        <Button className="ml-3" outlined variant="outline-dark" onClick={() => instance.loginPopup(loginRequest)}>SignIn</Button>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
        <Button className="ml-5" onClick={() => instance.logout()}>SignOut</Button>
        </AuthenticatedTemplate>
        </>
    )
}
