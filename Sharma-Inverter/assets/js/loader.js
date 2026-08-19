/*==========================================================
        Kushwaha INVERTERS
        PREMIUM LOADER
==========================================================*/

const loader = document.getElementById("loader");

loader.innerHTML = `

<div class="loader-wrapper">

    <div class="battery-loader">

        <div class="battery-body">

            <div class="battery-level"></div>

        </div>

        <div class="battery-head"></div>

        <div class="loader-bolt">

            <i class="fa-solid fa-bolt"></i>

        </div>

    </div>

    <h3>Powering Up...</h3>

    <p>Loading Kushwaha Inverters</p>

</div>

`;

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";

    document.body.classList.add("loaded");
  }, 1500);
});
