var dateEl = $("#date-display");
var timeEL = $("#time-display");
var button = $(`.buttonz`);

// function readProjectsFromStorage() {
//   var events = localStorage.getItem('events');
//   if (events) {
//     events = JSON.parse(events);
//   } else {
//     events = [];
//   }
//   return events;
// }

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  button.on("click", function () {
    console.log("you clicked me");
    console.log(this);
    var clock = $(this).parent().attr("id");
    var text = $(this).siblings("#textArea").val();
    localStorage.setItem(clock, text);

    var present = $(this).parent("row");
    var future = parseInt(present.attr("id"));
    var current = parseInt(dayjs().format("H"));

    $(this).addClass(
      future < current ? "past" : future === current ? ".present" : "future"
    );

    // for (let i = 9; i <= 17; i++) {
    //   $(`#hour-${i} #textArea`).val(localStorage.getItem(`hour-${i}`));
    // }

    // function readTxt() {
    // var text = localStorage.getItem('events');
    // if (events) {
    //   text= JSON.parse(events);
    // } else {
    //   events = [];
    // }
    // return events;
    // }
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $("#hour-9 #textArea").val(localStorage.getItem("hour-9"));
  $("#hour-10 #textArea").val(localStorage.getItem("hour-10"));
  $("#hour-11 #textArea").val(localStorage.getItem("hour-11"));
  $("#hour-12 #textArea").val(localStorage.getItem("hour-12"));
  $("#hour-13 #textArea").val(localStorage.getItem("hour-13"));
  $("#hour-14 #textArea").val(localStorage.getItem("hour-14"));
  $("#hour-15 #textArea").val(localStorage.getItem("hour-15"));
  $("#hour-16 #textArea").val(localStorage.getItem("hour-16"));
  $("#hour-17 #textArea").val(localStorage.getItem("hour-17"));
});

function displayTime() {
  var date = dayjs().format(`[Date:]	dddd, MMMM D, YYYY`);
  var time = dayjs().format(` [Time:]  h:mm A`);
  dateEl.text(date);
  timeEL.text(time);
}

displayTime();
