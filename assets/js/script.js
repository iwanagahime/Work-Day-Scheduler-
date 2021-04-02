// getting current date from moment.js, formatting it and appending to <p> element
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");

  dateTime.text(displayNow);
};

// getting data from local storage
const renderCalendarEvents = () => {
  const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

  // if data is present in local storage
  if (calendarEvents !== null) {
    // TODO render data and colour
    // getting current hour using moment.js
    const currentHour = moment().hour();

    // declaring and populating timeBlocksArray

    const timeBlocks = $(".container").find(".row");

    const callback = function () {
      const textArea = $(this).find("textarea");
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      // set new classes to display color blocks
      if (timeBlockTime === currentHour) {
        textArea.removeClass("past").addClass("present");
      } else if (timeBlockTime > currentHour) {
        textArea.removeClass("past").addClass("future");
      }
      //matching events with time blocks
      const plannedEvent = calendarEvents[timeBlockTime];
      textArea.text(plannedEvent);
    };

    timeBlocks.each(callback);
    // if there is no data in local storage
  } else {
    localStorage.setItem("calendarEvents", JSON.stringify({}));
  }
};
const onClick = function (event) {
  const target = $(event.target);
  if (target.is("button")) {
    console.log("save button clicked");
  }
};

const onReady = () => {
  // setting event listener on container
  $(".container").click(onClick);
  renderCurrentDate();

  renderCalendarEvents();
};
$(document).ready(onReady);
