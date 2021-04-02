// getting current date from moment.js, formatting it and appending to <p> element
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");

  dateTime.text(displayNow);
};

// getting data from local storage
const renderCalendarEvents = () => {
  const calendarEvents = localStorage.getItem("calendarEvents");

  // if data is present in local storage
  if (calendarEvents !== null) {
    // TODO render data and colour
    // getting current hour using moment.js
    const currentHour = moment().hour();

    // declaring timeBlocksArray
    // const timeBlocks = $(".container.row");
    const timeBlocks = $(".container").find(".row");
    console.log(timeBlocks);

    const callback = function () {
      const timeBlockTime = $(this).data("time");

      console.log($(this));
    };

    timeBlocks.each(callback);
    // if there is no data in local storage
  } else {
    localStorage.setItem("calendarEvents", JSON.stringify({}));
  }
};

// onLoad function
const onReady = () => {
  renderCurrentDate();

  renderCalendarEvents();
};
$(document).ready(onReady);
