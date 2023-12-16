document.addEventListener("DOMContentLoaded", function () {
  // Vanilla JavaScript for handling click events on navbar links
  var navLinks = document.querySelectorAll('.navbar-nav a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Remove 'active-link' class from all links
      navLinks.forEach(function (link) {
        link.classList.remove('active-link');
      });

      // Add 'active-link' class to the clicked link
      this.classList.add('active-link');
    });
  });

  // Vanilla JavaScript for handling scroll events to reveal elements
  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 110;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


  var t1 = gsap.timeline();

  // tl.from(".line span", 1.8, {
  //   y: 100,
  //   ease: "power4.out",
  //   delay: 1,
  //   skewY: 7,
  //   stagger: {
  //     amount: 0.3
  //   }
  // })



  t1.from("#animate h1,#offer p,#animContainer",{
x:-200,
opacity:0,
stagger:0.01,
  })
  

  t1.from("nav img, nav h4, a, #drop",{
    y:-100,
    // duration:0.3,
    // delay:0.09,
    opacity:0,
    stagger:0.05,
    // scale:3   image
  })

  t1.from("#best-deal-anim",{
    x:-100,
    opacity:0,
    // stagger:0.01,
      })
      



  // Lottie Animation
  var animation = lottie.loadAnimation({
    container: document.getElementById("animContainer"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/Animation - 1702544237754.json", // Lottie file path
  });

  // jQuery for Owl Carousel
  $("#myCarousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });
});
