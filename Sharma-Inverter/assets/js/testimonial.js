/*==========================================================
        TESTIMONIALS
==========================================================*/

const testimonialTrack = document.getElementById("testimonialTrack");

if (testimonialTrack) {

    function stars(count) {

        return '<i class="fa-solid fa-star"></i>'.repeat(count);

    }

    const cards = testimonials.map(item => `

        <div class="testimonial-card">

            <div class="testimonial-top">

                <div>

                    <h3>${item.name}</h3>

                    <div class="testimonial-stars">

                        ${stars(item.rating)}

                    </div>

                </div>

            </div>

            <p>

                "${item.comment}"

            </p>

        </div>

    `).join("");

    testimonialTrack.innerHTML = cards + cards;

}