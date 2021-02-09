import { axiosInstance } from "../../Utils/axios"

export async function getEvents(setEvents) {
   try{
    const response = await axiosInstance.get(`user/601f7f96cb8001e27506a894`);
    setEvents(response.data.events)
    
   }
   catch(err){
       console.log(err);
   }
}

//601f7f96cb8001e27506a894