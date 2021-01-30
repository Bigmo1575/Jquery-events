$(function() {

    var $logoPic = $('#logo1870');

    //css() jQuery mehtod is used to get/set css attribute
    // values instantly
    // 
    // animate() jQuery method also sets css attributes
    // over a duration of time
    //
    // reposition the logo image toward the left side of the page 
    // and will begin transparent and fade in as it flies in.
    $logoPic.css({
        opacity: 0,
        position: 'relative',
        left: -300,
        zIndex: 2
    })
    .animate({
        opacity: 1,
        left: 510
    }, 2500, 'easeOutElastic', function() {
        // code in here will not execute until the animate has finished -> sequencing
        $(this).fadeTo(2000, .5)
                .rotate({
                    duration: 2000,
                    angle: 0,
                    center: [0,0],
                    animateTo: 720

                });

    })
    .rotate({
        duration: 2500,
        angle: 0,
        center: [50,50],
        animateTo: -360

    });
 
});