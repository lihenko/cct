//main.js file




// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);


function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

jQuery('.sevices-slider').slick({
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  pauseOnHover:true,
  prevArrow: jQuery('.service-slider-prev'),
  nextArrow: jQuery('.service-slider-next'),
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


jQuery('.hero-slider').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 900,
  fade: true,
  dots: false,
  arrows: false,
});


