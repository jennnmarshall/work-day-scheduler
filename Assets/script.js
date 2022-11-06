// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// variables for: save button, textarea, date

var currentDay = $("#currentDay");
var saveButton = $('.saveBtn');
var today = dayjs();

$("#currentDay").text(today.format("dddd, MMMM D"));

console.log(today.$H);
console.log(typeof(today.$H))

function timeProgress() {
  if (today.$H === 9) {
    $("#hour-9").addClass("present");
  } else if (today.$H < 9) {
    $("#hour-9").addClass("future");
  } else {
    $("#hour-9").addClass("past")
  }

  if (today.$H === 10) {
    $("#hour-10").addClass("present");
  } else if (today.$H < 10) {
    $("#hour-10").addClass("future");
  } else {
    $("#hour-10").addClass("past");
  }

  if (today.$H === 11) {
    $("#hour-11").addClass("present");
  } else if (today.$H < 11) {
    $("#hour-11").addClass("future");
  } else {
    $("#hour-11").addClass("past");
  } 

  if (today.$H === 12) {
    $("#hour-12").addClass("present");
  } else if (today.$H < 12) {
    $("#hour-12").addClass("future");
  } else {
    $("#hour-12").addClass("past");
  }
  
  if (today.$H === 13) {
    $("#hour-13").addClass("present");
  } else if (today.$H < 13) {
    $("#hour-13").addClass("future");
  } else {
    $("#hour-13").addClass("past");
  }
  
  if (today.$H === 14) {
    $("#hour-14").addClass("present");
  } else if (today.$H < 14) {
    $("#hour-14").addClass("future");
  } else {
    $("#hour-14").addClass("past");
  }
  
  if (today.$H === 15) {
    $("#hour-15").addClass("present");
  } else if (today.$H < 15) {
    $("#hour-15").addClass("future");
  } else {
    $("#hour-15").addClass("past");
  }
  
  if (today.$H === 16) {
    $("#hour-16").addClass("present");
  } else if (today.$H < 16) {
    $("#hour-16").addClass("future");
  } else {
    $("#hour-16").addClass("past");
  }
  
  if (today.$H === 17) {
    $("#hour-17").addClass("present");
  } else if (today.$H < 17) {
    $("#hour-17").addClass("future");
  } else {
    $("#hour-17").addClass("past");
  }  
};

// function to set text for time block and append on save click


saveButton.on("click", function() {
  var textInput = $(this).siblings("#textInput").val();
  var id = this.parentElement.id;
  localStorage.setItem(id, textInput);
  console.log(textInput);
});

timeProgress();

$("#hour-9 #textInput").val(localStorage.getItem("hour-9"));
$("#hour-10 #textInput").val(localStorage.getItem("hour-10"));
$("#hour-11 #textInput").val(localStorage.getItem("hour-11"));
$("#hour-12 #textInput").val(localStorage.getItem("hour-12"));
$("#hour-13 #textInput").val(localStorage.getItem("hour-13"));
$("#hour-14 #textInput").val(localStorage.getItem("hour-14"));
$("#hour-15 #textInput").val(localStorage.getItem("hour-15"));
$("#hour-16 #textInput").val(localStorage.getItem("hour-16"));
$("#hour-17 #textInput").val(localStorage.getItem("hour-17"));




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // in the click listener funciton, "this" refers to the element that received the event (the save button in the div id containing the hour)
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
});
