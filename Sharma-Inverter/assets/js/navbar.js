/*==========================================================
    SHARMA INVERTERS
    NAVBAR
==========================================================*/

const navbar = document.getElementById("navbar");

navbar.innerHTML = `

<div class="navbar">

<div class="container nav-container">

    <!-- Logo -->

    <a href="#hero" class="logo">

        <img src="assets/images/logo/logo.png" alt="Sharma Inverters">

    </a>


    <!-- Desktop Menu -->

    <ul class="nav-links">

        <li><a href="#hero" class="active">Home</a></li>

        <li><a href="#why-us">Why Us</a></li>

        <li><a href="#products">Products</a></li>

        <li><a href="#gallery">Gallery</a></li>

        <li><a href="#testimonials">Testimonials</a></li>

        <li><a href="#contact">Contact</a></li>

    </ul>



    <!-- Right -->

    <div class="rsec">
    <div class="nav-right">

        <button id="themeToggle" class="theme-btn">

            <i class="fa-solid fa-moon"></i>

        </button>

        <a href="tel:8595973195" class="call-btn">

            <i class="fa-solid fa-phone"></i>

            Call

        </a>

    </div>



    <!-- Hamburger -->

    <div class="hamburger">

        <span></span>

        <span></span>

        <span></span>

    </div>
    </div>

</div>

</div>



<!-- Mobile Menu -->

<div class="mobile-menu">

<ul>

<li><a href="#hero">Home</a></li>

<li><a href="#why-us">Why Us</a></li>

<li><a href="#products">Products</a></li>

<li><a href="#gallery">Gallery</a></li>

<li><a href="#testimonials">Testimonials</a></li>

<li><a href="#contact">Contact</a></li>

<li>

<a href="tel:8595973195">

<i class="fa-solid fa-phone"></i>

Call Now

</a>

</li>

<li>

<a href="https://wa.me/918595973195">

<i class="fa-brands fa-whatsapp"></i>

WhatsApp

</a>

</li>

</ul>

</div>

`;
/*==========================================================
                HAMBURGER
==========================================================*/

const hamburger=document.querySelector(".hamburger");

const mobileMenu=document.querySelector(".mobile-menu");

hamburger.onclick=()=>{

hamburger.classList.toggle("active");

mobileMenu.classList.toggle("active");

};



document.querySelectorAll(".mobile-menu a").forEach(item=>{

item.onclick=()=>{

hamburger.classList.remove("active");

mobileMenu.classList.remove("active");

}

});


/*==========================================================
                ACTIVE MENU
==========================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*==========================================================
                NAVBAR SHADOW
==========================================================*/

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

nav.classList.toggle("scroll",window.scrollY>50);

});


/*==========================================================
                HIDE NAVBAR
==========================================================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

const current=window.pageYOffset;

if(current>lastScroll && current>100){

nav.classList.add("hide");

}

else{

nav.classList.remove("hide");

}

lastScroll=current;

});


/*==========================================================
                DARK MODE
==========================================================*/

const themeBtn=document.getElementById("themeToggle");

const body=document.body;



if(localStorage.getItem("theme")=="dark"){

body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}



themeBtn.onclick=()=>{

body.classList.toggle("dark");



if(body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

else{

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};