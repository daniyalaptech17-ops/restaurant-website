
const button = document.getElementById("magicBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "🔥 YOU ARE AMAZING! 🔥";
    button.textContent = "AWESOME!";
});
