import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

export default function DateTimePickerValue() {
  const [startTime, setStartTime] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30"),
  );
  const [stopTime, setStopTime] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T16:00"),
  );

  const handleStartTimeChange = (newStartTime: Dayjs | null) => {
    // Check if the new start time is before the current stop time
    if (!newStartTime || !stopTime || newStartTime.isBefore(stopTime)) {
      setStartTime(newStartTime);
    } else {
      // Display an error or show a notification that the start time cannot be after the stop time
      console.error("Start time cannot be after the stop time");
    }
  };

  const handleStopTimeChange = (newStopTime: Dayjs | null) => {
    // Check if the new stop time is after the current start time
    if (!newStopTime || !startTime || newStopTime.isAfter(startTime)) {
      setStopTime(newStopTime);
    } else {
      // Display an error or show a notification that the stop time cannot be before the start time
      console.error("Stop time cannot be before the start time");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={["DateTimePicker", "DateTimePicker"]}> */}
      <DateTimePicker
        label="Start Time"
        value={startTime}
        onChange={handleStartTimeChange}
      />
      <DateTimePicker
        label="Stop Time"
        value={stopTime}
        onChange={handleStopTimeChange}
      />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}
