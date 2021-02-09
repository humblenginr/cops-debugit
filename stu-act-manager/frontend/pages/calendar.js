import React from "react";
import { Calendar } from "../components/calendar/Calendar";
import { Main } from "../components/layouts/Main";

const calendar = () => {
  return (
    <Main >
      <div className="d-flex align-items-center vh-100 border justify-content-center">
      <Calendar />
      </div>
    </Main>
  );
};
export default calendar;
