import { axiosInstance } from "../../Utils/axios";


export const signinCall = (creds, setErrors,setLoading) => {
  setErrors("");
  setLoading(true);
  axiosInstance
    .post("auth/signin", creds)
    .then((res) => {
      localStorage.token = JSON.stringify(res.data);
      axiosInstance.defaults.headers.common['Authorization'] = res.data.token;
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      setErrors("Invalid credentials");
      setLoading(false);
    });
};
