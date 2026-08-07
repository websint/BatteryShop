/*==========================================================
            GALLERY
==========================================================*/

const galleryContainer = document.getElementById("galleryContainer");

if(galleryContainer){

galleryContainer.innerHTML = galleryImages.map(image=>`

<div class="swiper-slide">

<div class="gallery-card">

<img src="${image}"

loading="lazy"

alt="Gallery">

</div>

</div>

`).join("");

new Swiper(".gallerySwiper",{

loop:true,

spaceBetween:20,

speed:700,

navigation:{

nextEl:".gallery-next",

prevEl:".gallery-prev"

},

autoplay:{

delay:2500,

disableOnInteraction:false

},

breakpoints:{

0:{slidesPerView:1},

768:{slidesPerView:2},

992:{slidesPerView:3}

}

});

}