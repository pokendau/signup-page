const submitButton = document.getElementById("submit_button");
const errorMessages = Array.from(
  document.getElementsByClassName("error_message")
);
console.log(errorMessages);

submitButton.addEventListener("click", (event) => {
  const form = Array.from(document.getElementsByClassName("form_input"));
  form.forEach((element) => {
    if (element.name === "first_name") {
      if (element.value === "") {
        element.classList += " invalid_input";
        errorMessages[0].innerHTML = "Please set a value";
        errorMessages[0].style.display = "block";
      } else {
        element.classList.remove("invalid_input");
        errorMessages[0].style.display = "none";
      }
    } else if (element.name === "last_name") {
      if (element.value === "") {
        element.classList += " invalid_input";
        errorMessages[1].innerHTML = "Please set a value";
        errorMessages[1].style.display = "block";
      } else {
        element.classList.remove("invalid_input");
        errorMessages[1].style.display = "none";
      }
    } else if (element.name === "email") {
      if (element.value === "") {
        element.classList += " invalid_input";
        errorMessages[2].innerHTML = "Please set a value";
        errorMessages[2].style.display = "block";
      } else if (!validateEmail(element.value)) {
        element.classList += " invalid_input";
        errorMessages[2].innerHTML = "Please set a valid email";
        errorMessages[2].style.display = "block";
      } else {
        element.classList.remove("invalid_input");
        errorMessages[2].style.display = "none";
      }
    } else if (element.name === "phone_number") {
      if (element.value === "") {
        element.classList += " invalid_input";
        errorMessages[3].innerHTML = "Please set a value";
        errorMessages[3].style.display = "block";
      } else if (!validatePhoneNumber(element.value)) {
        element.classList += " invalid_input";
        errorMessages[3].innerHTML = "Please set a valid phone number";
        errorMessages[3].style.display = "block";
      } else {
        element.classList.remove("invalid_input");
        errorMessages[2].style.display = "none";
      }
    } else if (element.name === "password") {
      if (element.value === "") {
        element.classList += " invalid_input";
        errorMessages[4].innerHTML = "Please set a value";
        errorMessages[4].style.display = "block";
      } else if (element.value != form[5].value) {
        element.classList += " invalid_input";
        errorMessages[4].innerHTML = "Please set the same password";
        errorMessages[4].style.display = "block";
      } else {
        element.classList.remove("invalid_input");
        errorMessages[4].style.display = "none";
      }
    } else if (element.name === "confirm_password") {
      if (element.value === "") {
        element.classList += " invalid_input";
        errorMessages[5].innerHTML = "Please set a value";
        errorMessages[5].style.display = "block";
      } else if (element.value != form[4].value) {
        element.classList += " invalid_input";
        errorMessages[5].innerHTML = "Please set the same password";
        errorMessages[5].style.display = "block";
      } else {
        element.classList.remove("invalid_input");
        errorMessages[5].style.display = "none";
      }
    }
  });
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhoneNumber(number) {
  var re = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3}$/;
  return re.test(number);
}
