import React from 'react'
import { useAuthenticate } from '../../Hooks/useAuthenticate'
import { Navbar } from '../navbar/navbar'
import { StatusBar } from '../statusBar/StatusBar';

export const Main = ({children}) => {
    const user = useAuthenticate();
    if(user){
        return (
            <div >
            <StatusBar />
            <div className={`row d-flex flex-column overflow-hidden`}>
                <Navbar />
                <div className="container-fluid">{children}</div>
            </div>
            </div>
        )
        
    }
    else return null;
}
