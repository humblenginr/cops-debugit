import React from 'react'
import LoadingIllustration from "../../public/illustration/Loading.svg"

export const Loading = ({render}) => {
    return (
        <div className="vh-100 w-100 d-flex  flex-column justify-content-end align-items-center mb-5">
            {/* <img src="/illustration/Loading.svg" height="400px" /> */}
            <div className="border">
            <LoadingIllustration style={{transform: 'scale(0.6)', position: 'absolute', bottom: "0", top: "0", left: "0", right: "0", margin: "auto"}}/>
            </div>
            <div className="sofia" style={{fontSize:'20px'}}>{render()}
            </div>
        </div>
    )
}

//"/illustration/Loading.png"
