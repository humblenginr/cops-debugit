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

export const Calendar = ({data}) => {
  const datas = data.map((data,index) => {
    return {
      Id: index+1,
      Subject : data.Subject,
      StartTime: new Date(data.StartTime),
      EndTime : new Date(data.EndTime)
    }
  })
//   const datas =  [{
//     Id: 1,
//     Subject: 'Explosion of Betelgeuse Star',
//     StartTime: new Date(2018, 1, 15, 9, 30),
//     EndTime: new Date(2018, 1, 15, 11, 0)
// }, {
//     Id: 2,
//     Subject: 'Thule Air Crash Report',
//     StartTime: new Date(2018, 1, 12, 12, 0),
//     EndTime: new Date(2018, 1, 12, 14, 0)
// }, {
//     Id: 3,
//     Subject: 'Blue Moon Eclipse',
//     StartTime: new Date(2018, 1, 13, 9, 30),
//     EndTime: new Date(2018, 1, 13, 11, 0)
// }, {
//     Id: 4,
//     Subject: 'Meteor Showers in 2018',
//     StartTime: new Date(2018, 1, 14, 13, 0),
//     EndTime: new Date(2018, 1, 14, 14, 30)
// }];
  console.log(datas);
  return (
      <div className="w-75 overflow-auto h-75" >
    <ScheduleComponent currentView="Month" eventSettings={{dataSource: datas}}> 
      <Inject services={[Day,Week,Month]} />
    </ScheduleComponent>
    </div>
  );
};
