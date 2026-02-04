(function () {
  emailjs.init("HK85t7m_nVNHmHelQ"); // PUBLIC KEY
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_xgul5s7",
    "template_whk7z0s",
    form
  )
  .then(() => {
    alert("✅ Message sent successfully!");
    form.reset();
  })
  .catch((error) => {
    alert("❌ Failed to send message. Check console.");
    console.error("EmailJS Error:", error);
  });
});
