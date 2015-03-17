(function ($) {
    $(document).ready(function () {

	// manage story and comment forms
 //       $('.bear-comment-form').hide();
        $('.bear-story-form').hide();
 //       $('.bear-comment-icon').click(function () {
 //       	$('.bear-comment-form').toggle(); 
 //       });
        $('.bear-story-icon').click(function () {
        	$('.bear-story-form').toggle(); 
        });

	// manage subscriptions panel
 
        $('.bear-story-form').show ();
        $('.subscriptions-button').click(function () {
        	$('.subscription-pane').toggle(); 
        });

    
    });
})(jQuery);