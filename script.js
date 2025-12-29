$(document).ready(function () {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: false,
        offset: 80
    });

    // Mobile Menu Toggle
    // Mobile Menu Toggle
    $('.menu-toggle').click(function () {
        $('nav').addClass('active');
    });

    // Close Menu Button
    $('.close-menu').click(function () {
        $('nav').removeClass('active');
    });

    // Close menu when clicking a link
    $('nav ul li a').click(function () {
        $('nav').removeClass('active');
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        let target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // Header Color Change on Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});
