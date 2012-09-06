var topRange = 0,  // measure from the top of the viewport to X pixels down
    edgeMargin = 0,   // margin above the top or margin from the end of the page
    animationTime = 400, // time in milliseconds
    contentTop = [];

$(document).ready(function(){
    // Stop animated scroll if the user does something
    $('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function (e) {
        if (e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel') {
            $('html,body').stop();
        }
    });

    // Set up content an array of locations
    $('header').find('a').each(function () {
        var el = $(this).attr('href');
        if (el.indexOf('#')==0) contentTop.push($(el).offset().top);
    });

    // Animate menu scroll to content
    $('header').find('a').click(function () {
        var sel = this,
            newTop = Math.min(contentTop[$('header a').index($(this))], $(document).height() - $(window).height());
            $('html,body').stop().animate({
            'scrollTop': newTop
        }, animationTime, function () {
            //window.location.hash = $(sel).attr('href');
        });
        return false;
    });

    // adjust side menu
    /*
    $(window).scroll(function () {
        var winTop = $(window).scrollTop(),
            bodyHt = $(document).height(),
            vpHt = $(window).height() + edgeMargin;

        $.each(contentTop, function (i, loc) {
            console.log('----');

            console.log('----');
            if ((loc >= winTop - edgeMargin && (loc <= winTop + topRange || (winTop + vpHt) >= bodyHt))) {
                $('header h4').removeClass('selected').eq(i).addClass('selected');
            }
        });
    });
*/
})