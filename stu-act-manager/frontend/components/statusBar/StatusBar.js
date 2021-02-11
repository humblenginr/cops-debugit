import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import React from 'react'
import { SignInOutButton } from '../msGraphAuthentication/SignInOutButton'
import {SiMicrosoftteams} from "react-icons/si"

export const StatusBar = () => {
    return (
        <div className="w-100 h-auto text-right position-fixed top-0 p-2" style={{zIndex: "101"}}>
            <UnauthenticatedTemplate>
            <div className="mr-4 mt-2 sofia d-flex flex-row justify-content-end pointer">
                <SiMicrosoftteams size="25px" className="mt-1"/>
                <SignInOutButton />
                </div>
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate >
                <div className="mr-4 mt-2 sofia d-flex flex-row justify-content-end">
                <div className="mr-2">Synced</div>
                <SiMicrosoftteams size="25px" />
                
                </div>
            </AuthenticatedTemplate>

        </div>
    )
}
