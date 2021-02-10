import { axiosInstance } from "../../Utils/axios";

export const postEvent = (data, userId, setModal) => {
  axiosInstance
    .post(`event/create/${userId}`,data)
    .then((res) => {
      console.log("Successfully created");
      setModal(prev => !prev)
    })
    .catch((err) => {
      console.log(err);
    });
};
