// getting current date from moment.js, formatting it and appending to <p> element
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  displayNow = moment().format("dddd, MMMM Do");
  console.log(displayNow);
  dateTime.text(displayNow);
};

// getting data from local storage
const renderCalendarEvents = () => {
  const calendarEvents = localStorage.getItem("calendarEvents");
  console.log(calendarEvents);

  // if data is present in local storage
  if (calendarEvents !== null) {
    console.log("TODO- render the data and colors in the table");
    // getting current hour using moment.js
    const currentHour = moment().hour();
    console.log(currentHour);
    // declaring timeBlocksArray
    const timeBlocks = $("container.row");
    console.log(timeBlocks);
    // if there is no data in local storage
  } else {
    localStorage.setItem("calendarEvents", JSON.stringify({}));
  }
};
// onLoad function
const onReady = () => {
  renderCurrentDate();
  console.log("ready!");
  renderCalendarEvents();
};
$(document).ready(onReady);
