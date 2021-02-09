import React, { useEffect, useState } from 'react';
import {useRouter} from "next/router"

export const useAuthenticate = () => {
    const router = useRouter();
    const [user,setUser] = useState();
    useEffect(() => {
        if(localStorage && localStorage.token) setUser(localStorage.token.user);
        else{
            router.push('/auth/signin')
        }
    },[])

    return user;
}
