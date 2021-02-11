import { axiosInstance } from "../../Utils/axios";

export const putEvent = (data, userId,eventId, setModal) => {
    axiosInstance
      .put(`event/update/${userId}/${eventId}`,data)
      .then((res) => {
        console.log("Successfully updated");
        setModal(prev => !prev)
      })
      .catch((err) => {
        console.log(err);
      });
  };