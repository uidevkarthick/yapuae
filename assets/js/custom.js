$(document).ready(function () {
  $(".yap_tab_nav ul li").click(function () {
    var yap_tab_id = $(this).attr("rel");

    $(".yap_tab_nav ul li").removeClass("current");

    $(".yap_tab_content").removeClass("current");

    $(this).addClass("current");

    $("#" + yap_tab_id).addClass("current");
  });

  var $status = $(".pagingInfo");

  var $slickElement = $(".testimonial_slider");

  var $blockbannerSlider = $(".blogSlider");
  var $doodle_slider = $(".doodle_slider");
  var $inv_desktop = $(".inv_desktop");

  $slickElement.on("init reInit afterChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)

    var i = (currentSlide ? currentSlide : 0) + 1;

    $status.text(i + "/" + slick.slideCount);
  });
  $blockbannerSlider.on("init reInit afterChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)

    var i = (currentSlide ? currentSlide : 0) + 1;

    $status.text(i + "/" + slick.slideCount);
  });
  $doodle_slider.on("init reInit afterChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)

    var i = (currentSlide ? currentSlide : 0) + 1;

    $status.text(i + "/" + slick.slideCount);
  });

  $doodle_slider.slick({
    slidesToShow: 5,
    autoplay: false,

    autoplaySpeed: 7000,

    draggable: true,

    prevArrow:
      '<img id="left_caro" src="https://yappay.in/assets/images/caro_left.svg">',

    nextArrow:
      '<img id="right_caro" src="https://yappay.in/assets/images/caro_right.svg">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          infinite: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          infinite: false,
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $blockbannerSlider.slick({
    autoplay: false,

    autoplaySpeed: 7000,

    draggable: true,

    prevArrow:
      '<img id="left_caro" src="https://yappay.in/assets/images/caro_left.svg">',

    nextArrow:
      '<img id="right_caro" src="https://yappay.in/assets/images/caro_right.svg">',
  });

  $slickElement.slick({
    autoplay: true,

    autoplaySpeed: 7000,

    draggable: true,

    prevArrow:
      '<img id="left_caro" src="https://yappay.in/assets/images/caro_left.svg">',

    nextArrow:
      '<img id="right_caro" src="https://yappay.in/assets/images/caro_right.svg">',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".inv_mobile_slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    infinite: false,
    slidesToShow: 1,
    swipe: true,
  });
  $inv_desktop.slick({
    autoplay: false,
    arrows: true,
    autoplaySpeed: 6000,
    // centerMode: true,
    draggable: true,
    slidesToShow: 4,

    prevArrow:
      '<img id="left_caro" src="https://yappay.in/assets/images/caro_left.svg">',

    nextArrow:
      '<img id="right_caro" src="https://yappay.in/assets/images/caro_right.svg">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 40) {
      $("header").addClass("fix");
    } else {
      $("header").removeClass("fix");
    }
  });

  $(".navbar-toggler").click(function () {
    if ($(this).attr("aria-expanded") == "false") {
      $("header").css({ "background-color": "#151515", height: "100vh" });
      $(".header_bg").css({ "background-color": "#151515" });
      $("body").css("overflow", "hidden");
      // $('header').css({ "background-color": "#151515", "height": "100%" });
    } else {
      $("body").css("overflow", "auto");
      $("header").css({ "background-color": "#fff", height: "66px" });
      $(".header_bg").css({ "background-color": "#fff" });
    }
  });

  $(".end_point_overview").attr("id", "endpoint");

  // header toggle class for mobile nav
  $(".header_contain").addClass("header_bg");
  // toggle mobile nav
  $("#nav-toggle").click(function () {
    $(".header_contain").toggleClass("");
    // $('.header_contain').toggleClass('header_bg');
  });

  // news feeds

  jQuery.getJSON("../assets/js/news.json", function (data) {
    console.log(data, "data");
    var newsTemp = "";
    for (var i = 0; i < data.length; i++) {
      var newsHtml = `<div class="col-lg-4 col-xl-4 col-xs-12 col-sm-4">
      <a href="${data[i].url}" target="_blank">
      <div class="news_dlt">
        <div class="news_logo-sec">
          <img src="${data[i].image}" alt="" />
        </div>
        <div class="news_tlt-sec">
          ${data[i].descrption}
        </div>
      </div>
    </a></div>`;

      newsTemp = newsTemp + newsHtml;
    }

    $(".news-rows").append(newsTemp);
  });
});
$(document).ready(function () {
  var scrollTop = $(".scrollTop");
  console.log(scrollTop);
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

let intervel = [];
$(document).on("click", "#run_code_ss", function () {
  intervel.map(clearInterval);
  intervel = [];
  if ($("#pri_code").hasClass("show")) {
    $("#pri_code")
      .animate(
        {
          height: 368,
        },
        200
      )
      .removeClass("show");
    // $("#api_list_group li").each(function (index) {
    //   let each = this;
    //   let newIntervel = setTimeout(function () {
    //     $(each).removeClass("list_effect");
    //   }, (index + 1) * 1000);
    //   intervel.push(newIntervel);
    // });
  } else {
    $("#pri_code")
      .animate(
        {
          height: 600,
        },
        200
      )
      .addClass("show");

    $("#api_list_group li").each(function (index) {
      let each = this;

      let newIntervel = setTimeout(function () {
        $(each).addClass("list_effect");
        $(each).prev().removeClass("list_effect");
      }, (index + 1) * 1000);

      intervel.push(newIntervel);
    });
  }
});

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing",
        function () {}
      );
  });
});

$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() >= 980) {
      $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
      });

      $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
      });
    }
  });

  $(".drp-serv").click(function () {
    $(this).toggleClass("rot");
    $(this).parent().find(".drp-serv-lst").slideToggle();
  });
});

// for news box height
$(function () {
  setTimeout(() => {
    var bxHeight = 0;
    $(".news_dlt").each(function () {
      if (bxHeight <= $(this).height()) {
        bxHeight = $(this).height();
      }
    });
    $(".news_dlt").height(bxHeight);

    console.log("heightsss : " + $(".news_dlt").height(bxHeight));
  }, 300);
});
