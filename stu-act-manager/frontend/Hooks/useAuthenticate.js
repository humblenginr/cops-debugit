import React, { useEffect, useState } from 'react';
import {useRouter} from "next/router"
import { authorize, axiosInstance } from '../Utils/axios';

export const useAuthenticate = () => {
    const router = useRouter();
    const [user,setUser] = useState();
    useEffect(() => {
        if(localStorage.token) {
            setUser(JSON.parse(localStorage.token).user);
            authorize(JSON.parse(localStorage.token).token)
        }
        else{
            if(router.pathname.substr(0,5) != "/auth")
            router.push('/auth/signin')
        }
    },[])

    return user;
}
