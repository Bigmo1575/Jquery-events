$(function() {

    $loginPanel = $('#loginForm_wrap');

    $loginPanel.hide();

    // set up clickability on our login button 
    // and toggle sliding open/closed our login forms based on current state
    $('#loginHook').click(function(e) {

        // toggle the login form panel open or closed
        $loginPanel.slideToggle(400, 'easeOutBounce');
        // prevent the browsers default behavior in following the clicked links href attribute
        e.preventDefault();
    });

});