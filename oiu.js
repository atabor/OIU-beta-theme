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
 
//        $('.follow-pane').show ();
        $('.follow-button').click(function () {
        	$('.follow-pane').toggle(); 
                $('.follow-help-anon').toggle();
        });

        $('.follow-help').hide ();
        $('.follow-question-icon').click(function () {
        	$('.follow-help').toggle(); 
        });
        $('.close-follow-help-text').click(function () {
        	$('.follow-help').toggle(); 
        });    
    });
})(jQuery);