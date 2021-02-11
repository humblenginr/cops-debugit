import React, { useEffect } from 'react'

export const useRefreshEvents = (dep,scheduler) => {
    useEffect(() => {
        if(scheduler.current){
            scheduler.current.refreshEvents()
        }
    },dep)
}
