document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.getElementById("topbar");

  if (!topbar) return;

  const text =
    "🔥 MEGA OFFER • FREE INSTALLATION • FREE HOME DELIVERY • 100% GENUINE PRODUCTS • BEST PRICE GUARANTEE • LIVFAST • MICROTEK • LIVGUARD • OKAYA • SU-KAM • ALTIMA • SU-VASTIKA SOLAR • MTEK POWER • CALL NOW : +91 8292813953 • ";

  topbar.innerHTML = `
        <div class="topbar-wrapper">
            <div class="topbar-track">
                <p>${text}</p>
                <p>${text}</p>
            </div>
        </div>
    `;
});
