import { axiosInstance } from "../../Utils/axios";

export const deleteEvent = (userId,eventId, setModal) => {
    axiosInstance
      .delete(`event/delete/${userId}/${eventId}`)
      .then((res) => {
        console.log("Successfully Deleted");
        setModal(prev => !prev)
      })
      .catch((err) => {
        console.log(err);
      });
  };