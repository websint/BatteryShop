/*==========================================================
        Kushwaha INVERTERS
        COUNTER
==========================================================*/

const counters = document.querySelectorAll(".counter-number");

let counterStarted = false;

function startCounter() {
  if (counterStarted) return;

  counterStarted = true;

  counters.forEach((counter) => {
    const target = +counter.dataset.target;

    const increment = Math.ceil(target / 120);

    let current = 0;

    const updateCounter = () => {
      current += increment;

      if (current >= target) {
        current = target;

        counter.innerHTML = target + "+";

        return;
      }

      counter.innerHTML = current + "+";

      requestAnimationFrame(updateCounter);
    };

    updateCounter();
  });
}

const counterSection = document.getElementById("counter");

if (counterSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter();

          observer.unobserve(counterSection);
        }
      });
    },
    {
      threshold: 0.35,
    },
  );

  observer.observe(counterSection);
}
