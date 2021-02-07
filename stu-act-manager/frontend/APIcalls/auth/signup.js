import { axiosInstance } from "../../Utils/axios"



export const signupCall = (creds) => {
    axiosInstance.post('auth/signup',creds)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}