document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send(
    "service_xgul5s7",
    "template_whk7z0s",
    {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    }
  ).then(
    function() {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function(error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Check console.");
    }
  );
});
