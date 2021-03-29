// declaring current formatted date
const currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);
// setting current date to <p>
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");
});
