// JavaScript for the Home Page carousel image cloning
$(window).load(function() {
    $(".carousel .item").each(function() {
        var i = $(this).next();
        i.length || (i = $(this).siblings(":first")),
        i.children(":first-child").clone().appendTo($(this));

        for (var n = 0; n < 4; n++)(i = i.next()).length || (i = $(this).siblings(":first")),
        i.children(":first-child").clone().appendTo($(this));
    });
});

// Additional JavaScript for the Home Page: Smooth scroll for anchor links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});

// JavaScript for the Services Page carousel image cloning (same as Home Page)
$(window).load(function() {
    $(".carousel .item").each(function() {
        var i = $(this).next();
        i.length || (i = $(this).siblings(":first")),
       
