(function ($) {
    $(document).ready(function () {
        
        /* **** left panel                      ***/
        /* manage newsletter signup */
        $('#mc_embed_signup').hide ();
        $('.newsletter-button-wrapper').click(function () {
            $('#mc_embed_signup').toggle(); 
        });


        /* **** right  panel                      ***/

        /* manage metadata panel */
        $('.metadata-pane').toggle(); 
        $('.oiu-author-pane').toggle();
        $('div.metadata-button-wrapper').addClass("closed");
        $('.metadata-button').click(function () {
            $('.metadata-pane').toggle(); 
            $('.oiu-author-pane').toggle();
            if ($('div.metadata-button-wrapper').hasClass("open")) {
                $('div.metadata-button-wrapper').removeClass("open");
            }
            if ($('div.metadata-button-wrapper').hasClass("closed")) {
                $('div.metadata-button-wrapper').removeClass("closed").addClass("open");
            } else {
                $('div.metadata-button-wrapper').addClass("closed");
            }
        });
        
        /* manage subscriptions panel */
        // $('.follow-pane').show ();
        if ($('body').hasClass("not-logged-in")) {
            $('div.follow-button-wrapper').addClass("closed");
        }
        $('.follow-pane').toggle(); 
        $('.follow-help-anon').toggle();        
        $('div.follow-button-wrapper').addClass("closed");
        $('.follow-button').click(function () {
            $('.follow-pane').toggle(); 
            $('.follow-help-anon').toggle();
            if ($('div.follow-button-wrapper').hasClass("open")) {
                $('div.follow-button-wrapper').removeClass("open");
            }
            if ($('div.follow-button-wrapper').hasClass("closed")) {
                $('div.follow-button-wrapper').removeClass("closed").addClass("open");
            } else {
                $('div.follow-button-wrapper').addClass("closed");
            }            
        });
        $('.follow-help').hide ();
        $('.follow-question-icon').click(function () {
            $('.follow-help').toggle(); 
        });
        $('.close-follow-help-text').click(function () {
            $('.follow-help').toggle(); 
        });    

        if ($('body').hasClass("bbbe-story")) {
            $('.metadata-pane').toggle(); 
            $('div.metadata-button-wrapper').addClass("closed");
            $('.oiu-author-pane').toggle();
            $('.follow-pane').toggle(); 
        }

       /* manage visibility panel */
        $('.visibility-button').click(function () {
            $('.visibility-pane').toggle(); 
//            if ($('div.metadata-button-wrapper').hasClass("open")) {
//                $('div.metadata-button-wrapper').removeClass("open");
//            }
//            if ($('div.metadata-button-wrapper').hasClass("closed")) {
//                $('div.metadata-button-wrapper').removeClass("closed").addClass("open");
//            } else {
//                $('div.metadata-button-wrapper').addClass("closed");
//            }
        });
        
       /* manage story sequence panel */        
        if ($('div').hasClass("wtf")) {
            $('.story-sequence-pane').toggle(); 
            $('.story-sequence-button').toggle();
        }
        if (!$('div').hasClass("story-sequence-pane")) {
            $('.story-sequence-button').hide();
        }        
        /* **** bottom stuff                      ***/
        
        /* manage story, beer, and comment forms */
        $('.bear-story-form').hide();
        $('.bear-story-button').click(function () {
        	$('.bear-story-form').toggle(); 
                $('.video-upload-help').hide();
        });
        $('.video-upload-question-icon').click(function () {
        	$('.video-upload-help').toggle(); 
        });

        $('.beer-form').hide();
        $('.beer-button').click(function () {
        	$('.beer-form').toggle(); 
        });        
        
        /* collision between author-pane module and my author-pane 
         if ($('body').hasClass("node-type-forum")) {
            $('.author-pane').show();
        }
         if ($('div').hasClass("forum-post-wrapper")) {
            $('.author-pane').show();
        }        
**/
        
    });
})(jQuery);