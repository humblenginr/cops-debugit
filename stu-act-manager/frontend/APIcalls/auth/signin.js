import { axiosInstance } from "../../Utils/axios"

export const signinCall = (creds) => {
    axiosInstance.post('auth/signin',creds)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}