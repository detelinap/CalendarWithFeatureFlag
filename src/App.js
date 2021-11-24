import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Meeting new team mates",
    start: new Date(2021, 10, 0),
    end: new Date(2021, 10, 0),
  },
  {
    title: "Time off",
    start: new Date(2021, 10, 7),
    end: new Date(2021, 10, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 10, 20),
    end: new Date(2021, 10, 23),
  },
  {
    title: "Birthday",
    start: new Date(2021, 10, 30),
    end: new Date(2021, 10, 30),
  },
];

function App(props) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [flagValue, setFlagValue] = useState(false);

  props.client.getValueAsync("toggleAbilityToAddEvent", false).then(value => {
    setFlagValue(value);
  });

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App">
      {flagValue &&
        <div>
          <h1>Calendar</h1>
          <h2>Add New Event</h2>
          <div>
            <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
            <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
            <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
              Add Event
            </button>
          </div>
        </div>
      }
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
    </div>
  );
}

export default App;