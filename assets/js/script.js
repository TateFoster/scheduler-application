var timeBlockEl = $("#timeBlocks");
var todayDate = $("#currentDay");
var today = new Date();
var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var hour = today.getHours();

todayDate.text(today);

for (i = 0; i < workHours.length; i++) {
  var timeSection = $("<div>");
  var textArea = $("<textarea>");
  var button = $("<button>");
  var icon = $("<i>");
  timeSection.addClass("row my-4 hour w-100 justify-content-center text-left");

  if (i < 4) {
    timeSection.text(workHours[i] + ":00 AM");
  } else if (i > 4) {
    timeSection.text(workHours[i] - 12 + ":00 PM");
  } else {
    timeSection.text(workHours[i] + ":00 PM");
  }

  textArea.addClass("col-9 time-block description");
  textArea.attr("name", workHours[i]);
  textArea.attr("placeholder", "Tasks here");
  button.addClass(
    "saveBtn btn col-2 d-flex align-items-center justify-content-center"
  );

  icon.addClass("fa-solid fa-floppy-disk");

  button.append(icon);
  timeSection.append(textArea);
  timeSection.append(button);
  timeBlockEl.append(timeSection);

  textArea.text(localStorage.getItem(workHours[i]));
  if (parseInt(workHours[i]) < today.getHours()) {
    textArea.addClass("past");
  } else if (parseInt(workHours[i]) > today.getHours()) {
    textArea.addClass("future");
  } else {
    textArea.addClass("present");
  }
}

$(".btn").click(function (event) {
  var workEvent = event.target.previousElementSibling.value.trim();
  localStorage.setItem(event.target.previousElementSibling.name, workEvent);
});
