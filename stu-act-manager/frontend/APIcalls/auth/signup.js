import { axiosInstance } from "../../Utils/axios"
import { signinCall } from "./signin";



export const signupCall = (creds,setErrors,setLoading) => {
    setErrors("");
    setLoading(true);
    axiosInstance.post('auth/signup',creds)
    .then(res => {
        const cred = res.data;
        cred.id = undefined;
        cred.password = creds.password;
        signinCall(cred,setErrors,setLoading)
    })
    .catch(err => {
        setErrors("Invalid credentials");
        setLoading(false);
    })
}