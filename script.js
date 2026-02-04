// ================= EMAILJS CONTACT FORM =================

// Initialize EmailJS
(function () {
emailjs.init("ZxA1bcDeF123");
})();

// Form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_xgul5s7",   // ✅ your Service ID
      "template_whk7z0s",  // ✅ your Template ID
      this
    )
    .then(
      function () {
        alert("✅ Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("❌ Failed to send message. Try again.");
        console.error(error);
      }
    );
});
