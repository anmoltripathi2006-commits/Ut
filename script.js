document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("HK85t7m_nVNHmHelQ"); // ✅ your PUBLIC key

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 stops URL change

    emailjs.send("service_xgul5s7", "template_whk7z0s", {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    })
    .then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Check console.");
      }
    );
  });
});
