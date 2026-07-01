document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!form || !formMessage) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields before sending your message.";
      formMessage.style.color = "#ff8fa3";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "#ff8fa3";
      return;
    }

    formMessage.textContent = "Thank you! Your message has been prepared for sending.";
    formMessage.style.color = "#84d9ff";
    form.reset();
  });
});
