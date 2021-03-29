// declaring current formatted date
const currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);

// A $( document ).ready() block.
$(document).ready(function () {
  // setting current date to <p>
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  console.log("ready!");
});

const now = new Date(Date.now());
console.log(now);
const formatted =
  now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
console.log(formatted);
// declaring updateTimeBlocks function
const updateTimeBlocks = () => {};
