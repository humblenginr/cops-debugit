import React, { useRef } from 'react';
import {FormControl} from "react-bootstrap";
import { AuthButtons } from '../../buttons/AuthButtons';

export const AuthForms = ({heading,btnText}) => {
    const email = useRef();
    const password = useRef();
    const name = useRef();
    return (
        <div className="container sofia p-5">
            <div className="mb-3" style={{fontWeight: 'bold',fontSize:"50px"}}>{heading}</div>
            {heading==="Signup" ? <div className="mt-5"><FormControl ref={name} type="email" placeholder="Name" style={{fontWeight: '100'}}className="p-4"/></div>: null}
            <div className="mt-5"><FormControl ref={email} type="email" placeholder="Email" style={{fontWeight: '100'}}className="p-4"/></div>
            <div className="mt-5"><FormControl ref={password} placeholder="Password" type="password" style={{fontWeight: '100'}}className="p-4"/></div>
            <div className="mt-5"><AuthButtons email={email} password={password} name={name} tag={btnText} /></div>
            {heading==="Signin" ? <div className="mt-5 grey">Dont have an account?<span style={{color: 'black',cursor:"pointer"}} className="ml-2">Signup</span></div> : <div className="mt-5 grey">Already have an account? <span style={{color: 'black',cursor:"pointer"}}>Signin</span></div>}
        </div>
    )
}
