
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import "../App.css"
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';

import {Box,Typography} from '@pankod/refine-mui'

function Calendar() {
  const data = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2023, 3, 28, 10, 0),
      EndTime: new Date(2023, 3, 28, 12, 30),
    },
  ];

  return (
    <Box>
      <Box>
        <Typography fontSize={25} fontWeight={700} >Calendar and Schedule</Typography>
        <Box>
    <ScheduleComponent
      selectedDate={new Date(2023, 3, 28)}
      eventSettings={{
        dataSource: data,
      }}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
    </Box>
    </Box>
    </Box>
  )
}

export default Calendar