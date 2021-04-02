// getting current date from moment.js, formating it and appending to <p> element
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
    console.log("TODO- render the data in the table");
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

const eventInput = document.getElementById("#textarea");
// declaring current formatted date
const currentDay = moment().format("dddd, MMMM Do");
console.log(currentDay);

// get and format current hour
const now = new Date(Date.now());
console.log(now);

now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
console.log(formatted);

// declare an array of time blocks and converting it to an array of numbers
const timeBlocks = [
  "9.00",
  "10.00",
  "11.00",
  "12.00",
  "1.00",
  "2.00",
  "3.00",
  "4.00",
  "5.00",
].map((i) => Number(i));
console.log(timeBlocks);

//TODO declaring updateTimeBlocks function
// const timeBlocks = document.querySelectorAll("row time-block");

const updateTimeBlocks = () => {
  return;
};
//
// $("#textarea").html("Meeting");
// localStorage.content = $("#textarea").html();
// $("#textarea").html(localStorage.content);

// Retrieving data from local storage

// TODO sth is wrong with the scope and it does not read from local storage
const renderEvents = () => {};
// read from local storage
const plannerEvents = localStorage.getItem("plannerEvents");
if (plannerEvents !== null) {
  console.log("TODO - render data in the table");
} else {
  localStorage.setItem("plannerEvents", JSON.stringify({}));
  // if present display in time blocks
  eventInput.textContent = plannerEvents;
}
