$(document).ready(function () {
    $('.sidebar-icon').on('click', function () {
        $('.wrapper').toggleClass('active'),
            $(this).toggleClass('open');
    });

    var adjustSidebar = function () {
        $('.sidebar').slimScroll({
            height: document.documentElement.clientHeight - $('.navbar').outerHeight()
        });
    };

    adjustSidebar();
    $(window).resize(function () {
        adjustSidebar();
    });
});