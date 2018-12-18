var openfeedback = document.querySelector(".btn-feedback-open");
var feedback = document.querySelector(".feedback-popup");
var closefeedback = document.querySelector(".btn-feedback-close");
var clientname = feedback.querySelector("[name=name]");
var email = feedback.querySelector("[name=email]"); 
var message = feedback.querySelector("[name=message]")
var form = feedback.querySelector("form");

openfeedback.addEventListener("click", function (evt) { 
  evt.preventDefault();
  feedback.classList.add("feedback-open");
  clientname.focus(); 
});

closefeedback.addEventListener("click", function (evt) { 
  evt.preventDefault();
  feedback.classList.remove("feedback-open"); 
  feedback.classList.remove("input-error");
});

form.addEventListener ("submit", function (evt) {
  if (!clientname.value || !email.value || !message) {
    evt.preventDefault();
    feedback.classList.remove("input-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("input-error");
  }
})
document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("feedback-open")) {
      feedback.classList.remove("feedback-open");
      feedback.classList.remove("input-error");
    }
  }
});