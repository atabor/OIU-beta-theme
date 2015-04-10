(function ($) {
    $(document).ready(function () {

	/* manage story and comment forms */
        $('.bear-story-form').hide();
        $('.bear-story-button').click(function () {
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
            if ($('div.metadata-button-wrapper').hasClass("open")) {
                $('div.metadata-button-wrapper').removeClass("open");
            }
            if ($('div.metadata-button-wrapper').hasClass("closed")) {
                $('div.metadata-button-wrapper').removeClass("closed").addClass("open");
            } else {
                $('div.metadata-button-wrapper').addClass("closed");
            }
        });

    });
})(jQuery);