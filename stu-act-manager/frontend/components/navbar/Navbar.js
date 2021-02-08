import React from 'react';
import {GiCalendar} from "react-icons/gi"

export const Navbar = () => {
    return (
        <div className="bg-pink navbar overflow-hidden">
            <div className="d-flex flex-row">
                <div className="ml-4"><GiCalendar size="20px" color="white"/></div>
                <div className="ml-5">sdfasdfsafasdf</div>
            </div>
            <div className="d-flex flex-row">
                <div className="ml-3">asdf</div>
                <div className="ml-5">sdfasdfsafasdf</div>
            </div>
        </div>
    )
}
