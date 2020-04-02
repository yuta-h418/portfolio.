// alert("a");

$(function () {
    $(".img_navi_menu").click(function() {
        $(".navi_menu").slideToggle();
        $(".navi_menu").toggleclass("active");
    });
});

$(function() {
    $(window).scroll(function() {
        $('.main_text').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 40) {
                $('.main_text').addClass('hide');
            }
        })
    });
});

$(function() {
    $(window).scroll(function() {
        $('.mn_studio').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 650) {
                $('.mn_studio').addClass('hide1');
            }
        })
    });
});

$(function() {
    $(window).scroll(function() {
        $('.mn_studio').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 1600) {
                $('.mn_topics').addClass('hide2');
            }
        })
    });
});

$(function() {
    $(window).scroll(function() {
        $('.mn_profile').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 700) {
                $('.mn_profile').addClass('hide2');
            }
        })
    });
});

$(function() {
    $(window).scroll(function() {
        $('.mn_contact').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 500) {
                $('.mn_contact').addClass('hide2');
            }
        })
    });
});
