import React, { useEffect, useState, useRef } from "react";
import {
  Inject,
  Day,
  Week,
  Month,
  ScheduleComponent,
  getRecurrenceStringFromDate,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { getEvents } from "../../APIcalls/Calendar/getEvents";
import { useAuthenticate } from "../../Hooks/useAuthenticate";

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
import { useAcquireEvents } from "../../Hooks/useAcquireEvents";
import { useAddTeamsEvents } from "../../Hooks/useAddTeamsEvents";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Button } from "react-bootstrap";
import { useRefreshEvents } from "../../Hooks/useRefreshEvents";

export const Calendar = () => {
  const user = useAuthenticate();
  const [events, setEvents] = useState();
  const scheduler = useRef();
  const [showModal, setShowModal] = useState(false);
  const [args, setArgs] = useState(null);
  const teamsEvents = useAcquireEvents();
  useAddTeamsEvents(teamsEvents, setEvents,events);
  useEffect(() => {
    getEvents(setEvents, user);
  }, [showModal, user]);
  useRefreshEvents(events,scheduler);

  return (
    <>
      <UnauthenticatedTemplate>
        <div className="w-75 overflow-auto h-75">
          {events && (
            <ScheduleComponent
              currentView="Month"
              eventSettings={{ dataSource: events }}
              ref={scheduler}
              popupOpen={(args) => {
                args.cancel = true;
                setShowModal(true);
                setArgs(args);
              }}
            >
              <ViewsDirective>
                <ViewDirective option="Month" />
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
              </ViewsDirective>
              <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
          )}
          <PopupModal
            modal={showModal}
            setModal={setShowModal}
            args={args}
            user={user}
          />
        </div>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <div className="w-75 overflow-auto h-75">
          {events && teamsEvents ? (
            <ScheduleComponent
              currentView="Month"
              eventSettings={{ dataSource: events }}
              ref={scheduler}
              popupOpen={(args) => {
                args.cancel = true;
                setShowModal(true);
                setArgs(args);
              }}
            >
              <ViewsDirective>
                <ViewDirective option="Month" />
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
              </ViewsDirective>
              <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
          ) : null}
          <PopupModal
            modal={showModal}
            setModal={setShowModal}
            args={args}
            user={user}
          />
        </div>
      </AuthenticatedTemplate>
    </>
  );
};
