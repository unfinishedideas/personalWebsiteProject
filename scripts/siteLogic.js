// This is code I modified from my solution to Homework 4 with an added event listener for the page loading and injecting html
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

  if (name === "" || email === "" || message === "") {
    console.log("Err: Form not complete!");
  } else {
    console.log("========= FORM SUBMISSION =========");
    console.log(`Email: ${email}`);
    console.log(`Date: ${date}`);
    console.log(`Name: ${name}`);
    console.log(`Message: ${message}`);
    try {
      let form = document.getElementById("contact");

      // Note: There is probably a better way to do this
      let width = form.offsetWidth;
      let height = form.offsetHeight;

      let thankYou = document.createElement("h2");
      thankYou.textContent = `Thank you, ${name}! I will get back to you soon.`;
      thankYou.style = `display: block; text-align: center; margin: auto;`;

      let thankYouDiv = document.createElement("div");
      thankYouDiv.style = `width: ${width}px; height: ${height}px; display: flex; justify-content: center; align-items: center;`;

      thankYouDiv.appendChild(thankYou);
      form.style.padding = "0";
      form.replaceChildren(thankYouDiv);
    } catch (err) {
      console.log(err);
    }
  }

  event.preventDefault();
}
