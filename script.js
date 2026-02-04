document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("HK85t7m_nVNHmHelQ"); // ✅ PUBLIC key only

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ✅ stops URL change

    emailjs.sendForm(
      "service_xgul5s7",   // Service ID
      "template_whk7z0s",  // Template ID
      form
    )
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Check console.");
    });
  });

});
