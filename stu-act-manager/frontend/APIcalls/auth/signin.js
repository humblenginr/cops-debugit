import { axiosInstance } from "../../Utils/axios";

export const signinCall = (creds, setErrors, setDep) => {
  setErrors("");
  axiosInstance
    .post("auth/signin", creds)
    .then((res) => {
      localStorage.token = JSON.stringify(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      setErrors("Invalid credentials");
    });
};
