(function ($) {
    $(document).ready(function () {

	/* manage story and comment forms */
        $('.bear-story-form').hide();
        $('.bear-story-icon').click(function () {
        	$('.bear-story-form').toggle(); 
        });

	/* manage subscriptions panel */
        // $('.follow-pane').show ();
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

        /* manage newsletter signup */
        $('#mc_embed_signup').hide ();
        $('.newsletter-button-wrapper').click(function () {
        	$('#mc_embed_signup').toggle(); 
        });

        /* manage metadata panel */
        $('.metadata-button').click(function () {
        	$('.metadata-pane').toggle(); 
        	$('.author-pane').toggle(); 
        });

    });
})(jQuery);