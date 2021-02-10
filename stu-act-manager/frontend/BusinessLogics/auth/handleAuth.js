import { signinCall } from "../../APIcalls/auth/signin";
import { signupCall } from "../../APIcalls/auth/signup";

export const handleAuth = (creds, type,setErrors,setLoading) =>{
    if(type == "Signin"){
        signinCall(creds,setErrors,setLoading);
        return;
    }
    if(type == "Signup"){
        signupCall(creds);
        return;
    }
    else{
        console.log("None of the types match in auth handler!");
    }
}