/*
A jquery statement is used to create a jQuery object tha tcontains
matched tages (elements) as a nodelist and then to run jQuery mehtods on the jQuery object that
will somehow manipulate the matched tags (usually by alterting the css)


to create a jQuery object. we need to call the jQuery function.

jQuery();  // the jQuery fuction

Note: $ is an alias for "jQuery".

so, the funciton call is usually coded as $().

The jQuery fuction ALWAYS returns a jQuery object with the selected elements
as its 'matched elements'

what about parameters? We uslally pass a single paramater value,
called a selector, which can be one of two things:
<p id="stuff"> alsdfjsdfjwoef </p>

1) DOM object

eg var pStuff = document.querySelector("#stuff");
    $(pStuff);

2) css selector string (must be inside quotes)

    eg $('#stuff');

    var $paragraphSTuff = $('#sutff');

    Running jQuery methods on a jQuery object

    $('p')
    $('.someClass')

    //Generic jQuery statement
    $(selector).method(value1, value2);
    $('.someClass').hide();

*/
// dont run this code until the page is finished loading
// $(document).ready(function() {});
//
// lets use a shortcut for the above
$(function() {

    $soldierPic = $('#pic');

    // fade the image to 15% on page load over 3 seconds
    $soldierPic.fadeTo(3000, .15, 'easeOutBounce');

    // on hover, fade image to full opacity slowly
    // on hover off fade back to 15%

    $soldierPic.hover(function() {

        // handle hover over
        $(this).stop().fadeTo('slow', 1);

    }, function() {

        // handle hover off
        $(this).stop().fadeTo('normal', .15);

    }); 

});

