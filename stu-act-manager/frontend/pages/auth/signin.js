import React from 'react'
import { AuthLayout } from '../../components/layouts/auth'

const signin = () => {
    return (
        <AuthLayout isSignin={true}/>
    )
}

export default signin;