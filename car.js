const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const vehicle = document.getElementById("vehicle").value;

  message.textContent = "Thank you, " + name + "! Your " + vehicle + " is booked.";
  form.reset();
});