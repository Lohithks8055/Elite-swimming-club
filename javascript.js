function populateTimeSlots(selectedDate) {
  var timingDropdown = document.getElementById("timing");
  timingDropdown.innerHTML = "";

  var currentDate = new Date();

  var isToday = selectedDate.toDateString() === currentDate.toDateString();

  var availableTimeSlots = [];
  if (isToday) {
    var currentTime = currentDate.getHours();
    var availableHours = Math.min(18, currentTime + 1);
    for (var hour = currentTime + 1; hour <= availableHours; hour++) {
      availableTimeSlots.push(hour + ":00");
    }
  } else {
    for (var hour = 9; hour <= 18; hour++) {
      availableTimeSlots.push(hour + ":00");
    }
  }

  availableTimeSlots.forEach(function (time) {
    var option = document.createElement("option");
    option.text = time;
    timingDropdown.add(option);
  });
}

document.getElementById("date").addEventListener("change", function () {
  var selectedDate = new Date(this.value);

  populateTimeSlots(selectedDate);
});

$("#book-appointment").click(function () {
  $("#appointmentModal").modal("show");
});

function submitForm(event) {
  event.preventDefault();

  alert("Your appointment is booked!");

  resetForm();
}

function resetForm() {
  document.getElementById("appointment-form").reset();
}

$("#contact").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    1000
  );
});

$(".social-icons a").click(function () {
  var link = $(this).attr("href");

  window.open(link, "_blank");
});
