import { axiosInstance } from "../../Utils/axios";

export const signinCall = (creds, setErrors) => {
  axiosInstance
    .post("auth/signin", creds)
    .then((res) => {
      console.log(res);
      localStorage.token = JSON.stringify(res.data);
    })
    .catch((err) => {
      console.log(err);
      setErrors("Invalid credentials");

    });
};
