var timeBlockEl = $("#timeBlocks");
var date = $("#currentDay");
var today = moment().format("dddd, MMMM Do YYYY, h:mm A");
var workHours = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
var hour = moment().format("h:00 A");
console.log(hour);
date.text(today);

for (i = 0; i < workHours.length; i++) {
  var timeSection = $("<div>");
  timeSection
    .addClass("row my-4 hour w-100 justify-content-center")
    .text(workHours[i]);
  var textArea = $("<textarea>");
  textArea.addClass("col-9 time-block description");
  var button = $("<button>");
  button.addClass(
    "saveBtn btn col-2 d-flex align-items-center justify-content-center"
  );
  var icon = $("<i>");
  icon.addClass("fa-solid fa-floppy-disk");

  if (moment().format("h:00 A") < workHours[i]) {
    console.log("yay!");
  } else {
    console.log("nay!");
  }

  button.append(icon);
  timeSection.append(textArea);
  timeSection.append(button);
  timeBlockEl.append(timeSection);
}
