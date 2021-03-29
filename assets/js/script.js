// declaring current formatted date
const currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);

// A $( document ).ready() block.
$(document).ready(function () {
  // setting current date to <p>
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  console.log("ready!");
});

// get and format current hour
const now = new Date(Date.now());
console.log(now);

const formatted =
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

// TODO how to convert array of strings into array of numbers
// const numberTimeBlocks = timeBlocks.split(",").map(function (item) {
//   return parseInt(item, 2);
// });

// declaring updateTimeBlocks function
const updateTimeBlocks = () => {};
