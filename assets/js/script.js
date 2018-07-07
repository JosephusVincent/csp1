$(document).ready(function(){ 
    $(window).scroll(function(){ 
    	// Checks if window scolled more than 480 px
        if ($(this).scrollTop() > 480) { 
            $('#myBtn').fadeIn(); 
        } else { 
            $('#myBtn').fadeOut(); 
        } 
    }); 
    // animate if button is clicked
    $('#myBtn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    }); 
});

