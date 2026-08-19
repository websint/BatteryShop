/*==========================================================
        Kushwaha INVERTERS
        WHATSAPP ENQUIRY
==========================================================*/

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    /* ---------------- Validation ---------------- */

    if (name.length < 3) {
      alert("Please enter a valid name.");

      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10 digit mobile number.");

      return;
    }

    if (service === "") {
      alert("Please select a service.");

      return;
    }

    /* ---------------- Current Date ---------------- */

    const today = new Date();

    const date = today.toLocaleDateString("en-IN", {
      day: "2-digit",

      month: "short",

      year: "numeric",
    });

    /* ---------------- WhatsApp Message ---------------- */

    const message = `Hello Kushwaha Inverters,

Name : ${name}

Phone : ${phone}

Interested In : ${service}

Date : ${date}

Please share price and details.

Thank You.`;

    const whatsappURL = `https://wa.me/918292813953?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    quoteForm.reset();
  });
}
