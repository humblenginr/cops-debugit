import React, { useEffect, useState } from 'react'

export const useWindowWidth = () => {
    const [width,setWidth] = useState();
    useEffect(() => {
        setWidth(window.innerWidth);
    },[])   
    return width;
}
