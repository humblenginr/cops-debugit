import React, { useEffect, useState } from "react";
import { GiCalendar } from "react-icons/gi";
import { MdAssignment } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { AiFillRead } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { handleClick } from "../../BusinessLogics/auth/navbar/handleClick";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import Link from "next/link";
import {useRouter} from "next/router";


export const Navbar = () => {
    const router = useRouter();
  const [active,setActive] = useLocalStorage("navLink",String(router.pathname.substr(1)));
  useEffect(() => {
    return () => localStorage.removeItem("navLink");
  },[])
  
  return (
    <div className="bg-pink navbar overflow-hidden">
        <Link href="/calendar">
        <div
        className="d-flex flex-row pointer"
        style={{color: (active === "calendar" ? "#ebe984" : "white")}}
        onClick={() => {
          handleClick("calendar", setActive);
        }}
      >
        <div className="ml-4">
          <GiCalendar
            size="20px"
            color={active === "calendar" ? "#ebe984" : "white"}
          />
        </div>
        <div className="ml-5 sofia mt-1">Calendar</div>
      </div>
        </Link>
        <Link href="/assignments">
        <div
        className="d-flex flex-row pointer"
        style={{color: (active === "assignments" ? "#ebe984" : "white")}}
        onClick={() => {
          handleClick("assignments", setActive);
        }}
      >
        <div className="ml-4">
          <MdAssignment
            size="20px"
            color={active === "assignments" ? " #ebe984" : "white"}
          />
        </div>
        <div className="ml-5   sofia mt-1">Assignments</div>
      </div>
        </Link>
        <Link href="/clubs">
        <div
        className="d-flex flex-row pointer"
        style={{color: (active == "clubs" ? "#ebe984" : "white")}}
        onClick={() => {
          handleClick("clubs", setActive);
        }}
      >
        <div className="ml-4">
          <TiGroup
            size="20px"
            color={active === "clubs" ? " #ebe984" : "white"}
          />
        </div>
        <div className="ml-5  sofia mt-1">Clubs</div>
      </div>
        </Link>
        <Link href="exams">
        <div
        className="d-flex flex-row pointer"
        style={{color: (active === "exams" ? "#ebe984" : "white")}}
        onClick={() => {handleClick("exams", setActive);
    }}
      >
        <div className="ml-4">
          <AiFillRead
            size="20px"
            color={active === "exams" ? " #ebe984" : "white"}
          />
        </div>
        <div className="ml-5  sofia mt-1">Exams</div>
      </div>
        </Link>
        <Link href="/dashboard">
        <div
        className="d-flex flex-row pointer"
        style={{color: (active === "dashboard" ? "#ebe984" : "white")}}
        onClick={() => {handleClick("dashboard", setActive);
    }}
      >
        <div className="ml-4">
          <RiDashboardLine
            size="20px"
            color={active == "dashboard" ? " #ebe984" : "white"}
          />
        </div>
        <div className="ml-5  sofia mt-1">Dashboard</div>
      </div>
        </Link>
        <Link href="/auth/logout">
        <div
        className="d-flex flex-row pointer"
        onClick={() => {handleClick("logout", undefined);
    }}
      >
        <div className="ml-4">
          <BiLogOutCircle size="20px" color="white" />
        </div>
        <div className="ml-5 text-white sofia mt-1">Logout</div>
      </div>
        </Link>
    </div>
  );
};
