$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
    
    // Initialize Bootstrap carousel
    $('.carousel').carousel();

    // Ensure consistent image cloning in carousels
    $('.carousel .carousel-item').each(function() {
        var i = $(this).next();
        if (!i.length) {
            i = $(this).siblings(':first');
        }
        i.children(':first-child').clone().appendTo($(this));
    });
});
