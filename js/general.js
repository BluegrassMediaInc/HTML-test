window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(".hero-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  mouseDrag: true,
  items: 1,
});

$(".acme-slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: true,
  mouseDrag: true,
  items: 1.5,
  responsive: {
    768: {
      items: 3,
    },
  },
});
$(".upcoming-slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: true,
  mouseDrag: true,
  items: 1.5,
  responsive: {
    768: {
      items: 3,
    },
  },
});

$(".hero-slider .item").each(function () {
  $(this).css(
    "background-image",
    "url(" + $(this).find("img").attr("src") + ")"
  );
  $(this).find("img").remove();
});
