document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("HK85t7m_rVMHmHelQ"); // your PUBLIC key

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xgul5s7",
      "template_whk7z0s",
      this
    ).then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. See console.");
      }
    );
  });
});
