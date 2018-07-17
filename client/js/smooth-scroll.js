$(document).on('click', 'a[href^="#"].js-smooth-scroll', function (event) {
    event.preventDefault();
    const target = $($.attr(this, 'href'));

    if (!target.length) {
        return;
    }

    $('html, body').animate({
        scrollTop: target.offset().top
    }, 500);
});
