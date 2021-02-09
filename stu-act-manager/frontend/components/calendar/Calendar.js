import React from "react";
import {
  Inject,
  Day,
  Week,
  Month,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";
import {DataManager, WebApiAdaptor} from "@syncfusion/ej2-data"

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
  return (
      <div className="w-75 overflow-auto  h-75" >
    <ScheduleComponent currentView="Month">
      <Inject services={[Day,Week,Month]} />
    </ScheduleComponent>
    </div>
  );
};
