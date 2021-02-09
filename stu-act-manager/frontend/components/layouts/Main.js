import React from 'react'
import { useAuthenticate } from '../../Hooks/useAuthenticate'
import { Navbar } from '../navbar/navbar'

export const Main = ({children}) => {
    const user = useAuthenticate();
    if(user){
        return (
            <div className={`row vh-100 d-flex flex-column overflow-hidden`}>
                <Navbar />
                <div className="container-fluid">{children}</div>
            </div>
        )
        
    }
    else return null;
}
