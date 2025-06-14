// Typing effect for the name
const text = "Anferl Lee Sugay";
const element = document.querySelector(".typed-text");
let index = 0;
let isDeleting = false;

function type() {
  if (isDeleting) {
    element.textContent = text.substring(0, index--);
  } else {
    element.textContent = text.substring(0, index++);
  }

  if (!isDeleting && index > text.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 80 : 120);
  }
}

type();


// Message for contact me after sendint the message
function handleSend() {
    const form = document.getElementById("contact-form");

    if (form.checkValidity()) {
      // Show notification
      const notification = document.getElementById("notification");
      notification.style.display = "block";

      // Hide after 3 seconds
      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);

      // Reset form
      form.reset();
    } else {
      // Trigger browser validation UI
      form.reportValidity();
    }
  }
