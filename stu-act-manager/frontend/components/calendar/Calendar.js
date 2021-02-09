import React, { useEffect, useState } from "react";
import {
  Inject,
  Day,
  Week,
  Month,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { getEvents } from "../../APIcalls/Calendar/getEvents";

//style imports for calendar
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";
import "@syncfusion/ej2-schedule/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";

export const Calendar = () => {
  const [events, setEvents] = useState();
  useEffect(() => {
    getEvents(setEvents);
  }, []);
  return (
    <div className="w-75 overflow-auto h-75">
      {events && (
        <ScheduleComponent
          currentView="Month"
          eventSettings={{ dataSource: events }}
        >
          <Inject services={[Day, Week, Month]} />
        </ScheduleComponent>
      )}
    </div>
  );
};
