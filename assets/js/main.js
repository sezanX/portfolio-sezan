/*---- Default JS INDEXING

    01.serviceWidget();
    02.swiperJs();
    03.wowActive();
    04.wowActive();
    05.counterUp();
    06.tmpVedioActivation();
    07.stickyHeader();
    08.smoothScroll();
    09.menuCurrentLink();
    10.radialProgress();
    11.fonklsAnimation();
    12.rightDemo();
    13.onePageNav();
    14.tpm_mobileMenuActive();
    15.stickyToTop();
    16.tmpcustomAnimation();
    17.popupMobileMenu();
    18.contactForm();

----*/


(function ($) {
  "use strict";

  var tmPk = {
    m: function (e) {
      tmPk.d();
      tmPk.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      tmPk.serviceWidget();
      tmPk.swiperJs();
      tmPk.wowActive();
      tmPk.tmpVedioActivation();
      tmPk.stickyHeader();
      tmPk.smoothScroll();
      tmPk.menuCurrentLink();
      tmPk.rollingText();
      tmPk.radialProgress();
      tmPk.fonklsAnimation();
      tmPk.rightDemo();
      tmPk.onePageNav();
      tmPk.tpm_mobileMenuActive();
      tmPk.stickyToTop();
      tmPk.tmpcustomAnimation();
      tmPk.popupMobileMenu();
      tmPk.preloaderWithBannerActivation();
      tmPk.animationOnHover();
      tmPk.odoMeter();
      tmPk.tiltAnimation();
      // tmPk.titleSplit_2();
    },

    serviceWidget: function () {
      function serviceAnimation() {
        var $servicesWidget = $(".services-widget");
        var $activeBg = $servicesWidget.find(".active-bg");

        function updateActiveService($element) {
          if (!$element.length) return;

          var rect = $element[0].getBoundingClientRect();
          var topOff =
            rect.top - $servicesWidget[0].getBoundingClientRect().top;
          var height = $element.outerHeight();

          var $closestServiceItem = $element.closest(".service-item");
          if ($closestServiceItem.length) {
            $closestServiceItem.removeClass("mleave");
          }

          $servicesWidget.find(".service-item").each(function () {
            var $item = $(this);
            if (!$item.is($closestServiceItem)) {
              $item.addClass("mleave");
            }
          });

          $activeBg.css({
            top: topOff + "px",
            height: height + "px",
          });
        }

        $servicesWidget.on("mouseenter", ".service-item", function () {
          updateActiveService($(this));
        });

        $servicesWidget.on("mouseleave", function () {
          var $currentElement = $servicesWidget.find(".current");
          updateActiveService($currentElement);

          $servicesWidget.find(".service-item").each(function () {
            var $item = $(this);
            if (!$item.is($currentElement.closest(".service-item"))) {
              $item.removeClass("mleave");
            }
          });
        });

        // Initial call
        updateActiveService($servicesWidget.find(".current"));

        $servicesWidget.on("click", ".service-item", function () {
          $servicesWidget.find(".service-item").removeClass("current");
          $(this).addClass("current");
        });
      }

      // Initialize serviceAnimation
      serviceAnimation();
    },

    swiperJs: function () {
      $(document).ready(function () {
        var swiper = new Swiper(".testimonial-swiper", {
          // slidesPerView: 2,
          spaceBetween: 50,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".testimonial-swiper-v2", {
          slidesPerView: 2.5,
          spaceBetween: 30,
          freeMode: true,
          centeredSlides: true,
          loop: true,
          autoHeight: true,
          loopAddBlankSlides: true,
          pagination: {
            el: ".tmp-swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
              centeredSlides: true, // Enable centering for smaller screens as well
            },
            767: {
              slidesPerView: 2,
              centeredSlides: true, // Enable centering for larger screens
            },
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".project-details-swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".project-swiper-button-next",
            prevEl: ".project-swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-testimonials-2", {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: ".project-swiper-button-next",
            prevEl: ".project-swiper-button-prev",
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
          },
        });
      });
    },

    wowActive: function () {
      new WOW().init();
    },

    tmpVedioActivation: function (e) {
      $(".play-video").on("click", function (e) {
        e.preventDefault();
        $(".video-overlay").addClass("open");
        $(".video-overlay").append(
          '<iframe width="560" height="515" src="https://www.youtube.com/embed/8NJWZpC51Tg?si=Wu_uoN3F0HADlEQp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        );
      });

      $(".video-overlay, .video-overlay-close").on("click", function (e) {
        e.preventDefault();
        close_video();
      });

      $(document).keyup(function (e) {
        if (e.keyCode === 27) {
          close_video();
        }
      });

      function close_video() {
        $(".video-overlay.open").removeClass("open").find("iframe").remove();
      }
    },

    // sticky header activation
    menuCurrentLink: function () {
      var currentPage = location.pathname.split("/"),
        current = currentPage[currentPage.length - 1];
      $(".tmp-mainmenu li a").each(function () {
        var $this = $(this);
        if ($this.attr("href") === current) {
          $this.addClass("active");
          $this.parents(".has-dropdown").addClass("menu-item-open");
        }
      });
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

    popupMobileMenu: function (e) {
      $(".humberger_menu_active").on("click", function (e) {
        $(".tmp-popup-mobile-menu").addClass("active");
      });

      $(".close-menu").on("click", function (e) {
        $(".tmp-popup-mobile-menu").removeClass("active");
        $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a")
          .siblings(".submenu")
          .removeClass("active")
          .slideUp("400");
        $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a").removeClass(
          "open"
        );
      });

      $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
          $(this).toggleClass("open");
        }
      );

      $(
        ".tmp-popup-mobile-menu, .tmp-popup-mobile-menu .tmp-mainmenu.onepagenav li a"
      ).on("click", function (e) {
        e.target === this &&
          $(".tmp-popup-mobile-menu").removeClass("active") &&
          $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a")
            .siblings(".submenu")
            .removeClass("active")
            .slideUp("400") &&
          $(
            ".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a"
          ).removeClass("open");
      });

      $(".onepagenav-click a").on("click", function (e) {
        $(".tmp-popup-mobile-menu").removeClass("active");
        tmPk._html.css({
          overflow: "",
        });
      });
    },

    tpm_mobileMenuActive: function (e) {
      $(".tmp_button_active").on("click", function (e) {
        e.preventDefault();
        $(".tmp_side_bar").addClass("tmp_side_bar_open");
        $("body").addClass("sidemenu-active");
        // tmPk._html.css({
        //   overflow: "hidden",
        // });
      });

      $(".close_side_menu_active").on("click", function (e) {
        e.preventDefault();
        $(".tmp_side_bar").removeClass("tmp_side_bar_open");
        $("body").removeClass("sidemenu-active");
        tmPk._html.css({
          overflow: "",
        });
      });
    },

    smoothScroll: function (e) {
      $(document).on("click", '.onepage a[href^="#"]', function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          2000
        );
      });
    },

    rollingText: function () {
      let elements = document.querySelectorAll(".rolling-text");

      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      });

      elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      });
    },

    radialProgress: function () {
      $("svg.radial-progress").each(function (index, value) {
        $(this).find($("circle.bar--animated")).removeAttr("style");
        // Get element in Veiw port
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          var percent = $(value).data("countervalue");
          var radius = $(this).find($("circle.bar--animated")).attr("r");
          var circumference = 2 * Math.PI * radius;
          var strokeDashOffset =
            circumference - (percent * circumference) / 100;
          $(this)
            .find($("circle.bar--animated"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 2800);
        }
      });
    },

    tmpcustomAnimation: function () {
      return {
        init: function () {
          this.animates();
        },
        animates: function () {
          var animates = $(".tmp-scroll-trigger");
          if (animates.length > 0) {
            animates.each(function () {
              $(this).on("animationend", function (e) {
                setTimeout(function () {
                  $(e.target).attr("animation-end", "");
                }, 1000);
              });
            });
          }
        },
      };
    },

    rightDemo: function (e) {
      $(".show-demo").on("click", function (e) {
        $(".demo-modal-area").addClass("open");
      });
      $(".demo-close-btn").on("click", function (e) {
        $(".demo-modal-area").removeClass("open");
      });
      $(".popuptab-area li a.demo-dark").on("click", function (e) {
        $(".demo-modal-area").addClass("dark-version");
        $(".demo-modal-area").removeClass("active-light");
      });
      $(".popuptab-area li a.demo-light").on("click", function (e) {
        $(".demo-modal-area").removeClass("dark-version");
        $(".demo-modal-area").addClass("active-light");
      });
    },

    onePageNav: function () {
      $(".onepagenav").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.2,
        filter: ":not(.external)",
        easing: "swing",
      });
    },

    // two scroll spy
    smothScroll: function () {
      $(document).on("click", ".smoth-animation", function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top - 50,
          },
          300
        );
      });
    },

    fonklsAnimation: function () {
      let endTl = gsap.timeline({
        repeat: -1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".end",
          start: "bottom 100%-=50px",
        },
      });
      gsap.set(".end", {
        opacity: 0,
      });
      gsap.to(".end", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".end",
          start: "bottom 100%-=50px",
          once: true,
        },
      });
      let mySplitText = new SplitText(".end", {
        type: "words,chars",
      });
      let chars = mySplitText.chars;
      endTl.to(chars, {
        duration: 0.5,
        scaleY: 0.9,
        ease: "power3.out",
        stagger: 0.04,
        transformOrigin: "center bottom",
      });
      endTl.to(
        chars,
        {
          yPercent: -10,
          ease: "elastic",
          stagger: 0.03,
          duration: 0.8,
        },
        0.5
      );
      endTl.to(
        chars,
        {
          scaleY: 1,
          ease: "elastic.out(2.5, 0.2)",
          stagger: 0.03,
          duration: 1.5,
        },
        0.5
      );
      endTl.to(
        chars,
        {
          ease: "power2.out",
          stagger: 0.03,
          duration: 0.3,
        },
        0.5
      );
      endTl.to(
        chars,
        {
          yPercent: 0,
          ease: "back",
          stagger: 0.03,
          duration: 0.8,
        },
        0.7
      );
      endTl.to(chars, {
        duration: 1.4,
        stagger: 0.05,
      });
    },

    stickyToTop: function (e) {
      $(".tmp-sticky-top").css({
        top: 25,
      });
    },

    preloaderWithBannerActivation: function () {
      document.addEventListener("DOMContentLoaded", function () {
        // Select all title and subtitle elements
        const heroTitles = document.querySelectorAll(".tmp-title-split");
        const heroSubtitles = document.querySelectorAll(".hero__sub-title");
      
        // Loop through each pair of title and subtitle
        heroTitles.forEach((title, index) => {
          const subtitle = heroSubtitles[index]; // Match title with subtitle (if in pairs)
      
          // Split the text for both title and subtitle
          const splitTitle = new SplitText(title, { type: "chars" });
          const splitSubtitle = subtitle
            ? new SplitText(subtitle, { type: "chars words" })
            : null;
      
          // Create a timeline for each title and subtitle
          gsap.timeline({
            scrollTrigger: {
              trigger: title, // Trigger animation when the current title comes into view
              start: "top 80%", // Start when the top of the element reaches 80% of the viewport height
              end: "bottom 60%", // Optional: Define when animation ends
              toggleActions: "play none none none", // Play only once
              // markers: true // Uncomment for debugging
            },
          })
            .from(splitTitle.chars, {
              duration: 0.2,
              x: -10,
              autoAlpha: .02,
              stagger: 0.02,
            })
            .from(
              splitSubtitle ? splitSubtitle.words : [],
              {
                duration: 0.8,
                x: 100,
                autoAlpha: 0,
                stagger: 0.01,
              },
              "-=1" // Overlap with the previous animation
            );
        });
      });
      document.addEventListener("DOMContentLoaded", function () {
        // Select all title and subtitle elements
        const heroTitles = document.querySelectorAll(".tmp-title-split-2");
        const heroSubtitles = document.querySelectorAll(".hero__sub-title");
      
        // Loop through each pair of title and subtitle
        heroTitles.forEach((title, index) => {
          const subtitle = heroSubtitles[index]; // Match title with subtitle (if in pairs)
      
          // Split the text for both title and subtitle
          const splitTitle = new SplitText(title, { type: "chars" });
          const splitSubtitle = subtitle
            ? new SplitText(subtitle, { type: "chars words" })
            : null;
      
          // Create a timeline for each title and subtitle
          gsap.timeline({
            scrollTrigger: {
              trigger: title, // Trigger animation when the current title comes into view
              start: "top 80%", // Start when the top of the element reaches 80% of the viewport height
              end: "bottom 60%", // Optional: Define when animation ends
              toggleActions: "play none none none", // Play only once
              // markers: true // Uncomment for debugging
            },
          })
            .from(splitTitle.chars, {
              duration: 0.2,
              x: -10,
              autoAlpha: .06,
              stagger: 0.01,
            })
            .from(
              splitSubtitle ? splitSubtitle.words : [],
              {
                duration: 0.2,
                x: 100,
                autoAlpha: .06,
                stagger: 0.01,
              },
              "-=1" // Overlap with the previous animation
            );
        });
      });
      
        

    },

    animationOnHover: function () {
      let cards = document.querySelectorAll('.tmponhover');
      cards.forEach((tmpOnHover) => {
        tmpOnHover.onmousemove = function (e) {
          let x = e.pageX - tmpOnHover.offsetLeft;
          let y = e.pageY - tmpOnHover.offsetTop;
          tmpOnHover.style.setProperty('--x', x + 'px');
          tmpOnHover.style.setProperty('--y', y + 'px');
        };
      });
    },

    odoMeter: function () {

      $(document).ready(function () {
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
        }

        function triggerOdometer(element) {
          const $element = $(element);
          if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            $element.html(countNumber);
            $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
          }
        }

        function handleOdometer() {
          $('.odometer').each(function () {
            if (isInViewport(this)) {
              triggerOdometer(this);
            }
          });
        }

        // Check on page load
        handleOdometer();

        // Check on scroll
        $(window).on('scroll', function () {
          handleOdometer();
        });
      });


    },

    titleSplit_2: function(){
      if ($('.tmp-title-split').length) {				
        let	 staggerAmount 		= 0.03,
           translateXValue	= 20,
           delayValue 		= 0.1,
           easeType 			= "power2.out",
           animatedTextElements = document.querySelectorAll('.tmp-title-split');
        
        animatedTextElements.forEach((element) => {
          let animationSplitText = new SplitText(element, { type: "chars, words" });
            gsap.from(animationSplitText.chars, {
              duration: 1,
              delay: delayValue,
              x: translateXValue,
              autoAlpha: 0,
              stagger: staggerAmount,
              ease: easeType,
              scrollTrigger: { trigger: element, start: "top 85%"},
            });
        });		
      }
    },

    tiltAnimation: function(){

      $(document).ready(function(){
        let lengthTilt = document.getElementsByClassName('tilt-container');
        if(lengthTilt.length){
          const container = document.querySelector(".tilt-container");
          const card = document.querySelector(".tilt-card");
      
          container.addEventListener("mousemove", (e) => {
            const xPos = (window.innerWidth / 2 - e.pageX) / 80;
            const yPos = (window.innerHeight / 2 - e.pageY) / 80;
      
            card.style.transform = `rotateX(${yPos}deg) rotateY(${xPos}deg)`;
          });
      
          container.addEventListener("mouseenter", () => {
            card.style.transition = "none";
          });
      
          container.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.3s";
            card.style.transform = "none";
          });
        }
      });



    },

  };

  tmPk.m();
})(jQuery, window);


// Back To Top style here
function updateDimensions() {
  windowHeight = window.innerHeight;
  documentHeight = document.documentElement.scrollHeight - windowHeight;
}

// Initialize dimensions
updateDimensions();

// Add resize event listener to update dimensions
window.addEventListener('resize', updateDimensions);

document.addEventListener('DOMContentLoaded', function() {
  var box = document.querySelector(".scrollToTop");
  if (box) {
    var water = box.querySelector(".water");

    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var percent = Math.min(
        Math.floor((scrollPosition / documentHeight) * 100),
        100
      );
      water.style.transform = "translate(0," + (100 - percent) + "%)";

      if (scrollPosition >= 200) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });

    // Add click event listener to scroll to top
    box.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Preloader functionality
  function removePreloader() {
    document.body.classList.remove("preloader-active");
  }

  document.body.classList.add("preloader-active");
  window.addEventListener('load', function() {
    removePreloader();
  });
});


