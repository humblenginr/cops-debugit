import React, { useEffect, useState } from "react";
import { Calendar } from "../components/calendar/Calendar";
import { Main } from "../components/layouts/Main";
import { Button } from "react-bootstrap";
import { getEvents } from "../APIcalls/Calendar/getEvents";

const calendar = () => {
  const [events, setEvents] = useState();
  useEffect(() => {
    getEvents(setEvents);
  },[])
  return (
    <Main>
      {events && (
        <div className="d-flex align-items-center vh-100 border justify-content-center">
          <Calendar data={events} />
        </div>
      )}
    </Main>
  );
};
export default calendar;
