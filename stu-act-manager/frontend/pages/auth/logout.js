import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const logout = () => {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem("token");
        router.push('/auth/signin');
    },[])
    return null;
}
export default logout;
