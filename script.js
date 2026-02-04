// Initialize EmailJS
(function () {
  emailjs.init("HK85t7m_nVNHmHelQ"); // PUBLIC KEY
})();

// Contact form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  emailjs.send("service_xgul5s7", "template_whk7z0s", {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  })
  .then(() => {
    alert("✅ Message sent successfully!");
    form.reset();
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    alert("❌ Failed to send message. Please try again.");
  });
});
