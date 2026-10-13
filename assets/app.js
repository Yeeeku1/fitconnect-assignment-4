"use strict";
const form = document.querySelector("#main-form");
const task = Number(form.dataset.task);
const statusBox = document.querySelector("#form-status");
const controls = [...form.querySelectorAll("input, textarea, select")];
const requiredControls = controls.filter((control) => control.required);
const password = form.querySelector("#password");
const confirmation = form.querySelector("#confirm-password");
let attempted = false;
function matchPasswords() {
  if (confirmation)
    confirmation.setCustomValidity(
      confirmation.value && confirmation.value !== password.value
        ? "Passwords must match."
        : "",
    );
}
function errorMessage(control) {
  const validity = control.validity;
  const label = control.labels[0].textContent;
  if (validity.valueMissing)
    return control.tagName === "SELECT"
      ? "Please select your country."
      : `${label} is required.`;
  if (validity.typeMismatch)
    return "Enter a valid email address, such as you@example.com.";
  if (validity.customError) return control.validationMessage;
  if (validity.tooShort) return `Enter at least ${control.minLength} characters.`;
  if (validity.tooLong) return `Use no more than ${control.maxLength} characters.`;
  if (validity.patternMismatch)
    return control === password
      ? "Use 8–64 characters with at least one letter and one number."
      : "Enter a name containing at least one non-space character.";
  return "Please check this field.";
}
function showControl(control) {
  const valid = control.validity.valid;
  control.classList.toggle("is-valid", valid);
  control.classList.toggle("is-invalid", !valid);
  control.setAttribute("aria-invalid", String(!valid));
  if (control.type === "radio") {
    document.querySelector("#gender-error").classList.toggle("d-block", !valid);
    document.querySelector("#gender-valid").classList.toggle("d-block", valid);
  } else {
    document.getElementById(`${control.id}-error`).textContent = valid
      ? ""
      : errorMessage(control);
  }
}
function showStatus(message, error = false) {
  statusBox.hidden = false;
  statusBox.classList.toggle("error", error);
  statusBox.textContent = message;
}
form.addEventListener("input", (event) => {
  statusBox.hidden = true;
  matchPasswords();
  if (task >= 3) {
    const control = event.target;
    if (
      control.required &&
      (attempted ||
        control.classList.contains("is-valid") ||
        control.classList.contains("is-invalid"))
    ) {
      if (control.type === "radio")
        requiredControls.filter((item) => item.type === "radio").forEach(showControl);
      else showControl(control);
    }
    if (
      confirmation &&
      (attempted ||
        confirmation.classList.contains("is-valid") ||
        confirmation.classList.contains("is-invalid"))
    )
      showControl(confirmation);
  }
});
if (task >= 3) {
  form.addEventListener("focusout", (event) => {
    matchPasswords();
    if (event.target.required) showControl(event.target);
  });
  form.addEventListener(
    "invalid",
    () => {
      attempted = true;
      requiredControls.forEach(showControl);
      showStatus("Please correct the highlighted fields before continuing.", true);
    },
    true,
  );
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  matchPasswords();
  attempted = true;
  if (task >= 3) requiredControls.forEach(showControl);
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  showStatus(
    task === 4
      ? "Registration validated successfully! This is a demo; no account was created and no data was sent."
      : "Your message form was submitted successfully in this demo. No message was sent and no data was saved.",
  );
  statusBox.focus();
});
form.addEventListener("reset", () => {
  attempted = false;
  statusBox.hidden = true;
  statusBox.textContent = "";
  controls.forEach((control) => {
    control.classList.remove("is-valid", "is-invalid");
    control.removeAttribute("aria-invalid");
    control.setCustomValidity("");
  });
  form
    .querySelectorAll(".invalid-feedback, .valid-feedback")
    .forEach((element) => element.classList.remove("d-block"));
});

