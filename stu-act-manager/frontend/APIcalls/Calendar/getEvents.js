import { axiosInstance } from "../../Utils/axios"

export async function getEvents(setEvents) {
   try{
    const response = await axiosInstance.get(`user/601f7f96cb8001e27506a894`);
    const formattedEvents = response.data.events.map((event,index) => {
        return {
          Id: index+1,
          Subject : event.Subject,
          StartTime: new Date(event.StartTime),
          EndTime : new Date(event.EndTime)
        }
      })
    setEvents(formattedEvents)
   }
   catch(err){
       console.log(err);
   }
}

//601f7f96cb8001e27506a894