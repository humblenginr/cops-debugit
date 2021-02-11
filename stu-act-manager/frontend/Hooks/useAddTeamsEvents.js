import React, { useEffect } from 'react'

export const useAddTeamsEvents = (teamsEvents,setEvents,events) => {
    useEffect(() => {
        if(teamsEvents){
            setEvents(prev => {
                const data = prev;
                const lastElemId = prev[prev.length-1].Id
                teamsEvents.forEach((event,index) => {
                    event.Id = index+1+lastElemId;
                    data.push(event);
                });
                return data;
            })
        }
    },[teamsEvents,events])
}
