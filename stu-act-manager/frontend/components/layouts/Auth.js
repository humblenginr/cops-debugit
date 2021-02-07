import React from 'react'
import { AuthForms } from '../forms/auth/AuthForms'

export const AuthLayout = ({isSignin}) => {
    return (
        <div className="row vh-100">
            <div className="col-8 auth-background" />            
            {isSignin ? <div className="col-4 align-items-center justify-content-center d-flex px-5 border"><AuthForms heading="Signin" btnText="Signin"/></div> : <div className="col-4 align-items-center justify-content-center d-flex px-5 border"><AuthForms heading="Signup" btnText="Signup"/></div>}            
        </div>
    )
}
