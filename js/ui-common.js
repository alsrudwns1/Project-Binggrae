$(function () {
  // 스크롤 시 UI 상태 제어
  $(window).on("scroll", function () {
    const sct = $(this).scrollTop();

    // 헤더 배경색 변경
    $(".header").toggleClass("on", sct > 0);

    // 아래로 & 위로 버튼 전환
    $(".down_top_btn .down_btn").css("display", sct > 0 ? "none" : "flex");
    $(".down_top_btn .top_btn").css("display", sct > 0 ? "flex" : "none");
  });

  // 마우스 올려둘 시 헤더 배경색 변경
  $(".header_main .main_gnb")
    .on("mouseenter", function () {
      $(".header").addClass("on");
    })
    .on("mouseleave", function () {
      if ($(window).scrollTop() === 0) {
        $(".header").removeClass("on");
      }
    });

  // 언어 메뉴
  $(".main_etc .lang").on("click", function () {
    $(".main_etc .lang_menu").stop().slideToggle().toggleClass("on");
  });

  // 햄버거메뉴 클릭
  $(".main_etc .hamberger").on("click", function () {
    $(this).toggleClass("check");
    $(".hamberger_menu").toggleClass("on");
    $("#header .main_gnb").toggleClass("hide");

    // 햄버거 메뉴 열림/닫힘에 따라 스크롤 제어
    if ($(this).hasClass("check")) {
      $("body").css("overflow-y", "hidden");
      $(".header").removeClass("on");
    } else {
      $("body").css("overflow-y", "auto");
    }
  });

  // 햄버거메뉴 내 스크롤바 제거
  $(".hm_menu2").css("overflow-y", "hidden");

  // 모바일 햄버거 메뉴에서 x버튼 클릭
  $(".hamberger_menu .hm_container .hm_close").on("click", function () {
    $(".hamberger_menu.on").removeClass("on");
    $(".main_etc .hamberger.check").removeClass("check");
  });

  // 모바일 햄버거메뉴 닫기 눌렀을 때 스크롤 제어
  $(".hamberger_menu .hm_menu1 .hm_close").on("click", function () {
    $("body").css("overflow-y", "auto");
  });

  function mobileMenuToggle() {
    if ($(window).width() < 1200) {
      // depth 여는 버튼만 토글
      $(".hm_menu2 .depth01 > li > a")
        .off("click")
        .on("click", function (e) {
          const $li = $(this).parent("li");
          const $depth02 = $li.children(".depth02");

          if ($depth02.length > 0) {
            e.preventDefault();
            $depth02.slideToggle();
            $li.siblings().children(".depth02").slideUp();
          }
        });

      $(".hm_menu2 .depth02 a").on("click", function (e) {
        e.stopPropagation();
      });
    }
  }

  $(window).on("resize", mobileMenuToggle);
  mobileMenuToggle();

  // 검색창 클릭
  const $searchInput = $("#query");
  $searchInput
    .on("focus", function () {
      $(this).attr("placeholder", "");
    })
    .on("blur", function () {
      $(this).attr("placeholder", "제품명을 입력해주세요");
    });

  let mainProduct = new Swiper(".main_product .swiper", {
    speed: 500,
    slidesPerView: 3,
    grid: {
      rows: 2,
    },

    spaceBetween: 18,
    allowTouchMove: true,

    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".main_product .swiper-button-next",
      prevEl: ".main_product .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 6,
        grid: {
          rows: 1,
        },
      },
    },
  });

  $(window)
    .on("resize", function () {
      if ($(this).outerWidth() <= 767) {
        let h = $(".main_product .swiper-slide").outerHeight() * 2 + 100;
        $(".main_product .swiper").outerHeight(h);
      } else {
        $(".main_product .swiper").outerHeight("auto");
      }
    })
    .trigger("resize");

  let mainProduct2 = new Swiper(".main_product2 .swiper", {
    speed: 500,
    slidesPerView: 3,
    grid: {
      rows: 2,
    },

    spaceBetween: 18,
    allowTouchMove: true,

    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".main_product2 .swiper-button-next",
      prevEl: ".main_product2 .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 6,
        grid: {
          rows: 1,
        },
      },
    },
  });

  setTimeout(() => {
    $(window)
      .on("resize", function () {
        if ($(this).outerWidth() <= 767) {
          let h = $(".main_product2 .swiper-slide").outerHeight() * 2 + 100;
          $(".main_product2 .swiper").outerHeight(h);
        } else {
          $(".main_product2 .swiper").outerHeight("auto");
        }
      })
      .trigger("resize");
  }, 100);

  $(".down_top_btn .top_btn").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  $(".down_top_btn .down_btn").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });

  AOS.init({
    duration: 1000,
    // 한번만 실행하게
    //once: true
  });
});
