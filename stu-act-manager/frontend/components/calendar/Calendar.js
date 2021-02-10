import React, { useEffect, useState, useRef } from "react";
import {
  Inject,
  Day,
  Week,
  Month,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { getEvents } from "../../APIcalls/Calendar/getEvents";
import {useAuthenticate} from "../../Hooks/useAuthenticate"

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
import { PopupModal } from "./PopupModal";

export const Calendar = () => {
  const user = useAuthenticate();
  const [events, setEvents] = useState();
  const scheduler = useRef();
  const [showModal,setShowModal] = useState(false);
  const [args,setArgs] = useState(null);
  useEffect(() => {
    getEvents(setEvents,user);
  }, [showModal,user]);
  return (
    <div className="w-75 overflow-auto h-75">

      {events && (
        <ScheduleComponent
          currentView="Month"
          eventSettings={{ dataSource: events }}
          ref={scheduler}
          popupOpen={(args) => {
            console.log("open");
            args.cancel = true;
            setShowModal(true);
            setArgs(args)
          }}
        >
          <Inject services={[Day, Week, Month]} />
        </ScheduleComponent>
      )}
      <PopupModal modal={showModal} setModal={setShowModal} args={args} user={user}/>
    </div>
  );
};

