$(document).ready(function () {
    scrollToAnchor();
    setNavItemActive();
});

function scrollToAnchor() {
    const offsetScroll = 88;

    $("a[href^='#'], a[href^='/#']").on("click", function (e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);

        $("html, body").stop().animate({
            scrollTop: $target.offset().top - offsetScroll
        }, 600, "swing");
    });
}


function setNavItemActive() {
    $(".js-nav-item").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).siblings(".js-nav-item").removeClass("active");
        }
    })
}

$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});