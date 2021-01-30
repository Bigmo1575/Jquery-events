$(function() {

    var hoveredOverLinkWithTab;

    // on hover, change the associated text adn polaroid image
    // to correspond to the hovered navigation link. 

    $('#nav a').hover(function() {
        // mouse enter
        // hide current text and image
        $('.tabDesc:visible').hide();

        // show the text and image that correspond to link
        hoveredOverLinkWithTab = '#' + this.id + 'Tab';
        $(hoveredOverLinkWithTab).stop().fadeIn(1000);

    }, function() {
        // mouse leave
        // 1 hide one that is showing
        $(hoveredOverLinkWithTab).hide();

        // show default tab div
        $('#defaultTab').stop(true, true).fadeIn(5000);

    });

});