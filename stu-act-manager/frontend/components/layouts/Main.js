import React from 'react'
import { Navbar } from '../navbar/navbar'

export const Main = ({children}) => {
    return (
        <div className="row vh-100">
            <Navbar />
            <div className="container-fluid">{children}</div>
        </div>
    )
}
