$(function () {
    $(document).scroll(function () {
        var $nav = $(".lp-top-navbar");
        $nav.toggleClass('lp-top-navbar_scrolled', $(this).scrollTop() > $nav.height());
    });
});
