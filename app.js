const message = document.querySelector("#message");
const button = document.querySelector("#action-button");

button.addEventListener("click", () => {
  message.textContent = "Your JavaScript is working!";
});
