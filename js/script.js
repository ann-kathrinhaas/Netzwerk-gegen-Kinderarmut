$(document).ready(function () {
    scrollToAnchor();
    setNavItemActive();
    handleNavLinkClick();
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
    function updateActiveClass() {
        const hash = window.location.hash;
        $(".js-nav-item").removeClass("active");

        if (hash) {
            const activeLink = $(`a[href$="${hash}"]`);
            if (activeLink.length) {
                activeLink.parent().addClass('active');
            }
        } else {
            const currentPath = window.location.pathname.split("/").pop();
            if (currentPath === "culture.html") {
                const freizeitLink = $("a[href$='#freizeit']");
                if (freizeitLink.length) {
                    freizeitLink.parent().addClass('active');
                }
            } else {
                const homeLink = $("a[href*='#home']");
                if (homeLink.length) {
                    homeLink.parent().addClass('active');
                }
            }
        }
    }

    updateActiveClass();

    $(window).on('hashchange', function() {
        updateActiveClass();
    });
}

function handleNavLinkClick() {
    $(".js-nav-item a").on("click", function () {
        $(".js-nav-item").removeClass("active");
        $(this).parent().addClass("active");
    });
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