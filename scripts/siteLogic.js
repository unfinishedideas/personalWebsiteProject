// This is code I grabbed from my solution to Homework 4 with an added event listener for the page loading 
// Listener was found at this stack overflow post: https://stackoverflow.com/questions/1033398/how-to-execute-a-function-when-page-has-fully-loaded
window.addEventListener("load", function () {
  let form = document.getElementById("contact-form");
  form.addEventListener("submit", handleSubmit);
});

function handleSubmit(event) {
  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const message = document.getElementById("inputMessage").value;
  const date = Date.now();

  console.log("========= FORM SUBMISSION =========");
  console.log(`Email: ${email}`);
  console.log(`Date: ${date}`);
  console.log(`Name: ${name}`);
  console.log(`Message: ${message}`);

  event.preventDefault();
}
