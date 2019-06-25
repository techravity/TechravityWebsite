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
    $(".menu-container").toggleClass("active");
    $(".close-menu-btn").addClass("show");
  });
  $(document).on("click", ".close-menu-btn", function(e) {
    $(this).removeClass("show");
    $(".menu-container").toggleClass("active");
    $(".menu-btn").addClass("show");
  });
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
        nav: false
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
    $(this).addClass("active");
    aboutCarousel.trigger("to.owl.carousel", [$(this).attr("data-index") - 1, 300, true]);
  });
  aboutCarousel.on("changed.owl.carousel", function(e) {
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
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        margin: 20,
        autoplayTimeout: 5000
      },
      600: {
        items: 3,
        nav: false,
        autoplayTimeout: 5000
      },
      1000: {
        items: 4,
        nav: true
      }
    }
  });
  // SLIDER
  $(".slider-container .owl-carousel").owlCarousel({
    loop: true,
    margin: 45,
    responsiveClass: true,
    nav: false,
    navText: ["", ""],
    autoplay: true,
    autoplayTimeout: 7000,
    center: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 35
      },
      600: {
        items: 1.2,
        nav: false
      },
      1000: {
        items: 1.8,
        nav: false
      }
    }
  });
  // CLIENTS
  $(".clients-container .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    navText: ["", ""],
    dots: false,
    stagePadding: 20,
    margin: 40,
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 10,
        dots: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 3
      }
    }
  });
  var fixOwl = function() {
    var stageW = $(".project-thumbnails .owl-carousel").width(),
      containerH = $(".project-thumbnails").height(),
      $el = $(".project-thumbnails .owl-item");
    $el.each(function() {
      $(this).css("width", stageW);
    });
    setTimeout(function() {
      var stageH = $(".project-thumbnails .owl-carousel").height();
      $(".project-thumbnails .gallery-container").css("height", stageH);
      if (stageH > containerH) {
        $(".project-thumbnails").css("height", stageH + 40);
      }
    }, 500);
  };
  // PROJECT SLIDER
  $(".project-thumbnails .owl-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    navText: ["", ""],
    autoplay: false,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    },
    onInitialized: fixOwl,
    onResize: fixOwl
  });
  // Init ScrollMagic Controller
  if ($(".service-page").length > 0 && $(window).width() > 768) {
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

  var projects = [
    {
      id: 0,
      title: "beliive",
      description: "Beliive is the world's largest collaborative network that uses time as currency to enable collaboration and equal opportunities among people.",
      picture: "../images/projects/Mockup-01.jpg",
      url: " 1.html"
    },
    {
      id: 1,
      title: "Greenut",
      description: "Greenut allows you to shop online at wholesale rate, anytime and anywhere with just a tap of your finger. You can search for desired products.",
      picture: "../images/projects/Mockup-03.jpg",
      url: "2.html"
    },
    {
      id: 2,
      title: "Finna",
      description: "A groundbreaking, patent pending platform that will revolutionise Fintech industry with focus on bonds.",
      picture: "../images/projects/Mockup-02.jpg",
      url: "3.html"
    },
    {
      id: 3,
      title: "Find a player",
      description: "Find a Player is a multi platform app designed to take the pain out of organising and finding players for sports, games & events.",
      picture: "../images/projects/Mockup-04.jpg",
      url: "4.html"
    },
    {
      id: 4,
      title: "MOJO",
      description: "Mojo is a mobile platform which allows you to trade stocks directly, without bank interfering. Be a part of the new generation of investors.",
      picture: "../images/projects/Mockup-05.jpg",
      url: "5.html"
    },
    {
      id: 5,
      title: "SOCIETY ICON",
      description: "We believe that you as a person will be at the center of marketing in the future. The power of a person's social media has never been as high as it is today.",
      picture: "../images/projects/Mockup-06.jpg",
      url: "6.html"
    },
    {
      id: 6,
      title: "GIFTLET",
      description: "GIFTLET is an E-gifting Service for Top retailers and brands that enables their users to buy gifts for others without requiring their size or color.",
      picture: "../images/projects/Mockup-07.jpg",
      url: "7.html"
    },
    {
      id: 7,
      title: "Toolgram",
      description: "A powerful tool to manage and have revenue from all your telegram channels in one place.",
      picture: "../images/projects/Mockup-09.jpg",
      url: "9.html"
    }
  ];

  var numbers = [];
  function uniqueNumber(maxVal) {
    var number = Math.floor(Math.random() * maxVal + 1);
    if (!numbers.includes(number)) {
      numbers.push(number);
      return number;
    } else if (numbers.length - 1 !== maxVal) {
      uniqueNumber(maxVal);
    }
  }

  function randomItem() {
    for (var i = 0; i < 3; i++) {
      uniqueNumber(6);
    }
    numbers.forEach(index => {
      $(".more-projects .row").append(
        "<a href=" +
          projects[index].url +
          " class='items'><img src=" +
          projects[index].picture +
          " alt=" +
          projects[index].title +
          " /><div class='content'><h2>" +
          projects[index].title +
          "</h2><p>" +
          projects[index].description +
          "</p></div></a>"
      );
    });
  }
  if ($(".inner-portfolio-page").length) {
    randomItem();
  }
})();
