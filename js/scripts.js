(function() {
  // WOW ANIMATION
  new WOW().init();
  // Header Background
  if ($(window).width() < 736) {
    $("header").addClass("sticky");
  } else {
    $(window).scroll(function(e) {
      if ($(this).scrollTop() > 550) {
        $("header").removeClass("fixed");
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
        $("header").addClass("fixed");
      }
    });
  }
  // Project Estimator
  $(document).on("click", ".menu-container .btn", function(e) {
    e.preventDefault();
    $("#freeQuote").addClass("active");
  });
  // Expand or Collapse Menu
  $(document).on("click", ".menu-btn", function(e) {
    $(this).toggleClass("active");
    $(".menu-container").toggleClass("active");
  });
  // Banner Text Animation
  if ($("#typedHeader").length) {
    var typed = new Typed("#typedHeader", {
      stringsElement: "#typed-header",
      smartBackspace: true,
      showCursor: false,
      typeSpeed: 50,
      backDelay: 700,
      loop: true
    });
  }
  // Thumbnails
  $(".project-thumbnails.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
  // STEPS
  var aboutCarousel = $(".about-page .introduction-2 .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    navText: ["", ""],
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
  aboutCarousel.owlCarousel();
  $(document).on("click", ".about-page .introduction-2 .steps-container li", function() {
    $(".about-page .introduction-2 .steps-container li").removeClass("active");
    $(".about-page .introduction-2 h2").html($(this).attr("data-title"));
    $(this).addClass("active");
    aboutCarousel.trigger("to.owl.carousel", [$(this).attr("data-index") - 1, 300, true]);
  });
  aboutCarousel.on("changed.owl.carousel", function(e) {
    $(".about-page .introduction-2 h2").html($(".about-page .introduction-2 .steps-container li:nth-child(" + (e.item.index + 1) + ")").attr("data-title"));
    $(".about-page .introduction-2 .steps-container li").removeClass("active");
    $(".about-page .introduction-2 .steps-container li:nth-child(" + (e.item.index + 1) + ")").addClass("active");
  });
  // PARTNERS
  $(".parnters-container .container .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    navText: ["", ""],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });
  // CLIENTS
  $(".clients-container .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    navText: ["", ""],
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    stagePadding: 20,
    margin: 40,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });
  var fixOwl = function() {
    var stageW = $(".project-thumbnails .owl-carousel").width(),
      stageH = $(".project-thumbnails .owl-carousel").height(),
      containerH = $(".project-thumbnails").height(),
      $el = $(".project-thumbnails .owl-item");
    $el.each(function() {
      $(this).css("width", stageW);
    });
    $(".project-thumbnails .gallery-container").css("height", stageH);
    if (stageH > containerH) {
      $(".project-thumbnails").css("height", stageH + 40);
    }
  };
  // PROJECT SLIDER
  $(".project-thumbnails .owl-carousel").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: false,
    navText: ["", ""],
    autoplay: false,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    },
    onInitialized: fixOwl,
    onRefreshed: fixOwl,
    onResize: fixOwl
  });
  // Init ScrollMagic Controller
  if ($(".service-page").length > 0) {
    var controller = new ScrollMagic.Controller();
    $(".row").each(function() {
      new ScrollMagic.Scene({ triggerElement: this, duration: 1000, reverse: true })
        .on("enter", function() {
          // setTimeout(function() {
          var container = this.triggerElement();
          $(container)
            .find("svg")
            .each(function() {
              if (!$(this).hasClass("finished")) {
                new Vivus(
                  this,
                  {
                    duration: 40,
                    type: "sync",
                    onReady: function(myVivus) {
                      myVivus.el.style.opacity = "1";
                    }
                  },
                  function(obj) {
                    obj.el.classList.add("finished");
                  }
                );
              }
            });
          // }, index * 600);
        })
        .on("leave", function() {
          // animatedIcons.reset();
        })
        .addTo(controller);
    });
  }
  // FOOTER
  document.getElementById("yearText").innerText = new Date().getFullYear();
  if (document.getElementById("fullmap")) {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2hheWFuZWEiLCJhIjoiY2p1dGUwZ2EyMDZpZjN5cmtkYW83OGlxOCJ9.eklm9eRxfDt-StKFeApsZg";
    var map = new mapboxgl.Map({
      container: "fullmap",
      zoom: 15,
      center: [18.0687087, 59.3371188],
      style: "mapbox://styles/mapbox/light-v10"
    });
    var marker = new mapboxgl.Marker().setLngLat([18.0687087, 59.3371188]).addTo(map);
  }
  // FREEQUOTE
  $(document).on("click", "#freeQuote .close-btn", function(e) {
    $("#freeQuote").removeClass("active");
  });
  $(document).on("click", "#freeQuote .btn", function(e) {
    e.preventDefault();
  });
})();
