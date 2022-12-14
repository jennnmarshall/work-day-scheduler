// global variable list
var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");
var today = dayjs();

// sets the current day in the header
$("#currentDay").text(today.format("dddd, MMMM D"));

console.log(today.$H);
console.log(typeof today.$H);

// new condensed code that does the same as the below function using the "this" keyword
$(".time-block").each(function () {
  // console.log($(this).attr("id"));
  var timeBlockHour = Number($(this).attr("id").split("-")[1]);
  console.log(timeBlockHour);

  if (today.$H === timeBlockHour) {
    $(this).addClass("present");
  } else if (today.$H < timeBlockHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

// funciton to progress the time class color coding, will apply colors/classes based on the current hour
// function timeProgress() {
//   if (today.$H === 9) {
//     $("#hour-9").addClass("present");
//   } else if (today.$H < 9) {
//     $("#hour-9").addClass("future");
//   } else {
//     $("#hour-9").addClass("past");
//   }

//   if (today.$H === 10) {
//     $("#hour-10").addClass("present");
//   } else if (today.$H < 10) {
//     $("#hour-10").addClass("future");
//   } else {
//     $("#hour-10").addClass("past");
//   }

//   if (today.$H === 11) {
//     $("#hour-11").addClass("present");
//   } else if (today.$H < 11) {
//     $("#hour-11").addClass("future");
//   } else {
//     $("#hour-11").addClass("past");
//   }

//   if (today.$H === 12) {
//     $("#hour-12").addClass("present");
//   } else if (today.$H < 12) {
//     $("#hour-12").addClass("future");
//   } else {
//     $("#hour-12").addClass("past");
//   }

//   if (today.$H === 13) {
//     $("#hour-13").addClass("present");
//   } else if (today.$H < 13) {
//     $("#hour-13").addClass("future");
//   } else {
//     $("#hour-13").addClass("past");
//   }

//   if (today.$H === 14) {
//     $("#hour-14").addClass("present");
//   } else if (today.$H < 14) {
//     $("#hour-14").addClass("future");
//   } else {
//     $("#hour-14").addClass("past");
//   }

//   if (today.$H === 15) {
//     $("#hour-15").addClass("present");
//   } else if (today.$H < 15) {
//     $("#hour-15").addClass("future");
//   } else {
//     $("#hour-15").addClass("past");
//   }

//   if (today.$H === 16) {
//     $("#hour-16").addClass("present");
//   } else if (today.$H < 16) {
//     $("#hour-16").addClass("future");
//   } else {
//     $("#hour-16").addClass("past");
//   }

//   if (today.$H === 17) {
//     $("#hour-17").addClass("present");
//   } else if (today.$H < 17) {
//     $("#hour-17").addClass("future");
//   } else {
//     $("#hour-17").addClass("past");
//   }
// }

// when the save button is clicked, the value of the text input sibling of the targeted button is saved with the key set as the unique div id
saveButton.on("click", function () {
  var textInput = $(this).siblings("#textInput").val();
  var id = this.parentElement.id;
  localStorage.setItem(id, textInput);
  console.log(textInput);
});

// button in header will clear all the input text that has been saved
$("#clearAll").on("click", function () {
  localStorage.clear();
  location.reload();
});

// runs the function to progress the time color coding
// timeProgress();

// sets the matching elements to the value saved in the keys in local storage
$("#hour-9 #textInput").text(localStorage.getItem("hour-9"));
$("#hour-10 #textInput").text(localStorage.getItem("hour-10"));
$("#hour-11 #textInput").text(localStorage.getItem("hour-11"));
$("#hour-12 #textInput").text(localStorage.getItem("hour-12"));
$("#hour-13 #textInput").text(localStorage.getItem("hour-13"));
$("#hour-14 #textInput").text(localStorage.getItem("hour-14"));
$("#hour-15 #textInput").text(localStorage.getItem("hour-15"));
$("#hour-16 #textInput").text(localStorage.getItem("hour-16"));
$("#hour-17 #textInput").text(localStorage.getItem("hour-17"));
