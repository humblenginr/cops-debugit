import { useMsal } from '@azure/msal-react';
import React, { useEffect, useState } from 'react'
import { callMsGraph } from '../APIcalls/Graph/callMsGraph';
import { eventsFormatter } from '../BusinessLogics/Graph/eventsFormatter';
import { loginRequest } from '../Constants/graphConfigs';

export const useAcquireEvents = () => {
    const { instance, accounts } = useMsal();
    const [graphData,setGraphData] = useState(null);


    useEffect(() => {
        if(accounts.length){
            instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(eventsFormatter(response.value)));
            });
        }
        else console.log("No account");
    },[accounts])

    return graphData;
}
